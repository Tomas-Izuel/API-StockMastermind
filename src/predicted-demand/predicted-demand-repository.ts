import { Injectable } from "@nestjs/common";
import { CreatePredictedDemandDto } from "./dto/create-predicted-demand.dto";
import { PredictedDemand } from "./entities/predicted-demand.entity";
import { DemandParam } from "src/demand-param/entities/demand-param.entity";
import { UpdatePredictedDemandDto } from "./dto/update-predicted-demand.dto";

@Injectable()
export class PredictedDemandRepository{
    async create(predictedDemand: CreatePredictedDemandDto){
        return await PredictedDemand.create(predictedDemand);
    }

    async findAll(){
        return await PredictedDemand.findAll({include: {model: DemandParam}})
    }

    async findOne(id: number) {
        const predictedDemand = await PredictedDemand.findByPk(id, { include: { model: DemandParam } });
        if (!predictedDemand) {
          return 'article not found';
        }
        return predictedDemand;
    }

    async update(id: number, updatePredictedDemand: UpdatePredictedDemandDto) {
        const predictedDemand = await PredictedDemand.findByPk(id);
        if (!predictedDemand) {
          return 'article not found';
        }
        await PredictedDemand.update(updatePredictedDemand, { where: { id } });
        return await this.findOne(id);
      }
    
      async remove(id: number) {
        const predictedDemand = await PredictedDemand.findByPk(id, { include: { model: DemandParam } });
        if (!predictedDemand) {
          return 'article not found';
        }
        return await PredictedDemand.destroy({ where: { id } });
      }

}