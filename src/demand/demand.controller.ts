import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { DemandService } from './demand.service';
import { DemandNames } from './factory';
import { CalculateDemandParams } from './interfaces';
import { ProviderService } from 'src/provider/provider.service';
import { ArticleService } from 'src/article/article.service';
import { OrderService } from 'src/order/order.service';

@Controller('demand')
export class DemandController {
  constructor(
    private readonly demandService: DemandService,
    private articleService: ArticleService,
    private orderService: OrderService,
  ) {}

  @Get('calculate')
  async calculateDemand(
    @Query('periods') periods: string,
    @Query('article_id') article_id: string,
    @Query('alpha') alpha?: string,
  ): Promise<{
    demand_predicted: number;
    errors: Record<string, number>;
    bestMethod: DemandNames;
    security_stock: number;
    request_point: number;
    lot_optimum: number;
    standard_deviation: number;
    max_stock: number;
    cgi: number;
  }> {
    const params: CalculateDemandParams = {
      periods: parseInt(periods, 10),
      article_id: parseInt(article_id, 10),
      alpha: alpha ? parseFloat(alpha) : 0.5,
    };

    if (isNaN(params.periods) || isNaN(params.article_id)) {
      throw new BadRequestException('Invalid periods or article_id');
    }

    const methods = [
      DemandNames.PROMEDIO_PONDERADO,
      DemandNames.PROMEDIO_PONDERADO_EXPONENCIAL,
      DemandNames.PROMEDIO_MOVIL,
    ];
    const results = await Promise.all(
      methods.map(async (m) => {
        const result = await this.demandService.Calculate(params, m);
        return {
          method: m,
          demand: result.demand,
          errors: result.errors,
        };
      }),
    );

    let bestMethod = DemandNames.PROMEDIO_PONDERADO;
    let minError = Infinity;
    let bestResult = results[0];
    results.forEach((result) => {
      const totalError = Object.values(result.errors).reduce(
        (acc, error) => acc + error,
        0,
      );
      if (totalError < minError) {
        minError = totalError;
        bestMethod = result.method;
        bestResult = result;
      }
    });
    const security_stock = await this.demandService.calculateSafetyStock(
      params.article_id,
    );
    const request_point = await this.demandService.calculateOrderPoint(
      bestResult.demand,
    );
    const lot_optimum = await this.demandService.calculateOptimumLot(
      bestResult.demand,
      params.article_id,
    );
    const standard_deviation =
      await this.demandService.calculateStandardDeviation(params.article_id);
    const article = await this.articleService.findOne(params.article_id);
    const max_stock = await this.demandService.maxStock(standard_deviation);
    await article.update({ security_stock, request_point, max_stock });
    const cgi = await this.demandService.getCGI(
      article,
      bestResult.demand,
      lot_optimum,
    );
    if (article.dataValues.stock <= request_point) {
      const quantity = max_stock - article.dataValues.stock;
      console.log(quantity);
      await this.orderService.create({
        quantity,
        subtotal: article.dataValues.price * quantity,
        total: article.dataValues.price * quantity,
        provider_id: 1,
        article_id: article.dataValues.id,
      });
      const stock_update = article.dataValues.stock + lot_optimum;
      await article.update({ stock: stock_update });
    }
    return {
      demand_predicted: bestResult.demand,
      errors: bestResult.errors,
      bestMethod,
      security_stock,
      request_point,
      lot_optimum,
      standard_deviation: standard_deviation,
      max_stock,
      cgi,
    };
  }
}
