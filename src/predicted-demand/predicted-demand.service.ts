import { Injectable } from '@nestjs/common';
import { PredictedDemandRepository } from './predicted-demand-repository';
import { CreatePredictedDemandDto } from './dto/create-predicted-demand.dto';
import { UpdatePredictedDemandDto } from './dto/update-predicted-demand.dto';

@Injectable()
export class PredictedDemandService {

    constructor(private predictedDemandRepository: PredictedDemandRepository) {}

    create(createPredictedDemandDTO: CreatePredictedDemandDto){
        return this.predictedDemandRepository.create(createPredictedDemandDTO);
    }

    findAll(){
        return this.predictedDemandRepository.findAll();
    }

    findOne(id: number){
        return this.predictedDemandRepository.findOne(id);
    }

    update(id: number, updatePredictedDemandDto: UpdatePredictedDemandDto){
        return this.predictedDemandRepository.update(id, updatePredictedDemandDto);
    }

    remove(id: number){
        return this.predictedDemandRepository.remove(id);
    }
}
