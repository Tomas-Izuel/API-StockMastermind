import { BadRequestException, Injectable } from '@nestjs/common';
import { CalculateDemandParams } from './interfaces';
import { DemandNames, factoryDemand } from './factory';
import { ErrorNames, factoryErrorCalculation } from '../error/factory';
import { CalculateErrorParams } from './interfaces';
import { DemandHistory } from 'src/demand-history/entities/demand-history.entity';
import { ProviderService } from 'src/provider/provider.service';
import { ArticleService } from 'src/article/article.service';

@Injectable()
export class DemandService {
  constructor(
    private readonly supplierService: ProviderService,
    private articleService: ArticleService,
  ) {}
  async calculateStandardDeviation(article_id: number): Promise<number> {
    const historicalDemand = await this.getHistoricalDemandArticle(article_id);
    const mean =
      historicalDemand.reduce((acc, demand) => acc + demand, 0) /
      historicalDemand.length;
    const sumOfSquares = historicalDemand.reduce(
      (acc, demand) => acc + Math.pow(demand - mean, 2),
      0,
    );
    const standardDeviation = Math.sqrt(sumOfSquares / historicalDemand.length);

    return standardDeviation;
  }

  async calculateSafetyStock(article_id: number): Promise<number> {
    const supplier = await this.supplierService.default();
    const leadTime = supplier.dataValues.shipping_time;
    const standardDeviation = await this.calculateStandardDeviation(article_id);
    const safetyStock = leadTime * standardDeviation;
    const roundedSafetyStock = Math.ceil(safetyStock);
    return roundedSafetyStock;
  }

  async calculateOrderPoint(demand: number): Promise<number> {
    const supplier = await this.supplierService.default();
    const leadTime = supplier.dataValues.shipping_time;
    const orderPoint = demand/4 * leadTime;
    return Math.ceil(orderPoint);
  }

  async maxStock(standar_desviation: number): Promise<number> {
    const supplier = await this.supplierService.default();
    const shipping_time = supplier.dataValues.shipping_time;
    const max_stock = standar_desviation * shipping_time * 1.5;
    return Math.ceil(max_stock);
  }

  async calculateOptimumLot(
    demand: number,
    article_id: number,
  ): Promise<number> {
    const supplier = await this.supplierService.default();
    const shipping_cost = supplier.dataValues.shipping_cost;
    const article = await this.articleService.findOne(article_id);
    if (!article) {
      throw new BadRequestException('Article not found');
    }
    const storage_cost = article.dataValues.storage_cost;
    console.log(demand, shipping_cost, storage_cost);
    const optimumLot = Math.sqrt((2 * demand * shipping_cost) / storage_cost);
    return Math.ceil(optimumLot);
  }

  private async getHistoricalDemandArticle(
    article_id: number,
  ): Promise<number[]> {
    const historicalDemand: number[] = [];
    const demandRecords = await DemandHistory.findAll({
      where: {
        article_id,
      },
      attributes: ['quantity_demand'],
    });
    demandRecords.forEach((record) => {
      historicalDemand.push(record.quantity_demand);
    });

    return historicalDemand;
  }

  async Calculate(
    params: CalculateDemandParams,
    method: DemandNames,
  ): Promise<{ demand: number; errors: Record<string, number> }> {
    const demand = factoryDemand(method);
    const predictedDemand = await demand.Calculate(params);
    const historicalDemand = await this.getHistoricalDemand(
      params.article_id,
      params.periods,
    );
    const errorParams: CalculateErrorParams = {
      actual: historicalDemand,
      predicted: Array(historicalDemand.length).fill(predictedDemand),
    };

    const errors = await this.calculateErrors(errorParams);

    return { demand: predictedDemand, errors };
  }

  private async calculateErrors(
    params: CalculateErrorParams,
  ): Promise<Record<string, number>> {
    const errorMethods = [
      ErrorNames.MEAN_ABSOLUTE_DEVIATION,
      ErrorNames.MEAN_SQUARED_ERROR,
      ErrorNames.MEAN_ABSOLUTE_PERCENTAGE_ERROR,
    ];

    const errors: Record<string, number> = {};

    for (const method of errorMethods) {
      const errorCalculator = factoryErrorCalculation(method);
      const error = await errorCalculator.Calculate(params);
      errors[method] = error;
    }

    return errors;
  }

  private async getHistoricalDemand(
    article_id: number,
    periods: number,
  ): Promise<number[]> {
    const currentDate = new Date();
    const historicalDemand: number[] = [];

    for (let i = 0; i < periods; i++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - i,
        28,
      );
      const period = `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${date
        .getDate()
        .toString()
        .padStart(2, '0')} 00:00:00`;

      try {
        const demandRecord = await DemandHistory.findOne({
          where: {
            article_id,
            period,
          },
        });

        if (demandRecord) {
          historicalDemand.push(demandRecord.quantity_demand);
        } else {
          historicalDemand.push(0);
        }
      } catch (error) {
        console.error(
          `Error fetching demand record for period ${period}:`,
          error,
        );
        historicalDemand.push(0);
      }
    }
    return historicalDemand;
  }
}
