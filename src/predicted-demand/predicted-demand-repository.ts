import { Injectable } from "@nestjs/common";
import { CreatePredictedDemandDto } from "./dto/create-predicted-demand.dto";
import { PredictedDemand } from "./entities/predicted-demand.entity";
import { DemandParam } from "src/demand-param/entities/demand-param.entity";
import { UpdatePredictedDemandDto } from "./dto/update-predicted-demand.dto";
import { Article } from "src/article/entities/article.entity";
import { Op, Sequelize } from "sequelize";

@Injectable()
export class PredictedDemandRepository{

    async create(predictedDemand: CreatePredictedDemandDto){
        return await PredictedDemand.create(predictedDemand);
    }

    async findAll(){
        return await PredictedDemand.findAll({
          include: [
            {model: DemandParam},
            {model: Article}
          ]
        });
    }

    async findOne(id: number) {
        const predictedDemand = await PredictedDemand.findByPk(
          id, 
          { include: [
            {model: DemandParam},
            {model: Article}
          ]
        });
        return predictedDemand;
    }

    async findByArticleIdAndSelected(id: number) {
      const currentMonth = new Date().getMonth() + 1; // getMonth() returns 0-based month, so add 1

      return await PredictedDemand.findOne({
        where: {
          article_id: id,
          selected: true,
          [Op.and]: [
            Sequelize.where(Sequelize.fn('MONTH', Sequelize.col('period')), currentMonth)
          ]
        },
        include: [
          { model: DemandParam },
          { model: Article }
        ]
      });
    }

    async update(id: number, updatePredictedDemand: UpdatePredictedDemandDto) {
        await PredictedDemand.update(updatePredictedDemand, { where: { id } });
        return await this.findOne(id);
      }
    
    async remove(id: number) {
        return await PredictedDemand.destroy({ where: { id } });
    }


}
