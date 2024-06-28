import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { ArticleRepository } from './article-repository';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PredictedDemandService } from 'src/predicted-demand/predicted-demand.service';
import { ProviderService } from 'src/provider/provider.service';

@Injectable()
export class ArticleService {
  constructor(
    private articleRepository: ArticleRepository,
    private predictedDemandService: PredictedDemandService,
    private providerService: ProviderService
  ) {}

  create(createArticleDto: CreateArticleDto) {
    return this.articleRepository.create(createArticleDto);
  }

  findAll() {
    return this.articleRepository.findAll();
  }

  findOne(id: number) {
    return this.articleRepository.findOne(id);
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.articleRepository.update(id, updateArticleDto);
  }

  remove(id: number) {
    return this.articleRepository.remove(id);
  }

  async calcularInventario(id: number,z: number){
    const existArticle = await this.articleRepository.findOne(id);
    
    if(existArticle === 'article not found'){
      return new Error("article not found");
    }
    const predictedDemand = await this.predictedDemandService.findByArticleIdAndSelectedTrue(id);
    if(!predictedDemand){
      return new Error("El articulo no tiene demanda predecida");
    }
    
    const provider = await this.providerService.findByArticleId(id);
    if(!provider){
      return new Error("Not found pro");
    }

    const maxStock = Math.sqrt((2 * provider.shipping_cost * predictedDemand.quantity) / existArticle.storage_cost);
    const requestPoint = predictedDemand.quantity * provider.shipping_time;
    const securityStock = z * 1 *Math.sqrt(provider.shipping_time);
    const updateArticleDto: UpdateArticleDto = {
      max_stock: maxStock,
      request_point: requestPoint,
      security_stock: securityStock,
    };
    return await this.update(id,updateArticleDto);
  }
}
