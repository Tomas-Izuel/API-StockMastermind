import { Injectable } from '@nestjs/common';
import { PredictedDemandRepository } from './predicted-demand-repository';
import { CreatePredictedDemandDto } from './dto/create-predicted-demand.dto';
import { UpdatePredictedDemandDto } from './dto/update-predicted-demand.dto';
import { ArticleService } from 'src/article/article.service';
import { DemandParamsService } from 'src/demand-param/demand-params.service';
import { error } from 'console';

@Injectable()
export class PredictedDemandService {

    constructor(
        private predictedDemandRepository: PredictedDemandRepository,
        private articleService: ArticleService,
        private demandParam: DemandParamsService
    ) {}

    async create(createPredictedDemandDTO: CreatePredictedDemandDto){
        const existArticle = await this.articleService.findOne(
            createPredictedDemandDTO.article_id
        );
        if(!existArticle){
            throw new Error('Article not found');
        }
        const existDemandParam = await this.demandParam.findOne(
            createPredictedDemandDTO.demand_param_id
        );
        if(!existDemandParam){
            throw new Error('Demand params not found');
        }

        return this.predictedDemandRepository.create(createPredictedDemandDTO);
    }

    findAll(){
        return this.predictedDemandRepository.findAll();
    }

    findOne(id: number){
        return this.predictedDemandRepository.findOne(id);
    }

    async findByArticleIdAndSelectedTrue(id: number){
        const predicatedDemandByAritcleSelected = this.predictedDemandRepository.findByArticleIdAndSelected(id);
        if(!predicatedDemandByAritcleSelected){
            throw new Error("Predicted demand not found");
        }
        return predicatedDemandByAritcleSelected;
    }

    async update(id: number, updatePredictedDemandDto: UpdatePredictedDemandDto){
        const existPredictedDemand = await this.predictedDemandRepository.findOne(id);
        if (!existPredictedDemand) {
          return 'Predicated demand not found';
        }
        if(updatePredictedDemandDto.article_id){
            const existArticle = await this.articleService.findOne(
                updatePredictedDemandDto.article_id
            );
            if(!existArticle){
                throw new Error('Article not found');
            }
        }
        if(updatePredictedDemandDto.demand_param_id){
            const existDemandParam = await this.demandParam.findOne(
                updatePredictedDemandDto.demand_param_id
            );
            if(!existDemandParam){
                throw new Error('Demand params not found');
            }
        }
        return this.predictedDemandRepository.update(id, updatePredictedDemandDto);
    }

    async remove(id: number){
        const existPredictedDemand = await this.predictedDemandRepository.findOne(id);
        if (!existPredictedDemand) {
          return 'Predicated demand not found';
        }
        return this.predictedDemandRepository.remove(id);
    }
}
