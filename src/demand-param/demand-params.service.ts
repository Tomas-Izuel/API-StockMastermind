/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateDemandParamDto } from './dto/create-demand-param.dto';
import { UpdateDemandParamDto } from './dto/update-demand-param.dto';
import { DemandParamRepository } from './demand-params-repository';

@Injectable()
export class DemandParamsService {
  
  constructor(private demandParamRepository: DemandParamRepository) {}
  create(createDemandParamDto: CreateDemandParamDto) {
    return this.demandParamRepository.create(createDemandParamDto);
  }

  findAll() {
    return this.demandParamRepository.findAll();
  }

  findOne(id: number) {
    return this.demandParamRepository.findOne(id);
  }

  update(id: number, updateDemandParamDto: UpdateDemandParamDto) {
    return this.demandParamRepository.update(id, updateDemandParamDto);
  }

  remove(id: number) {
    return this.demandParamRepository.remove(id);
  }
}
