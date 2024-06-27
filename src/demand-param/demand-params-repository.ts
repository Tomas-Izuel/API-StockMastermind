import { Injectable } from '@nestjs/common';
import { CreateDemandParamDto } from './dto/create-demand-param.dto';
import { UpdateDemandParamDto } from './dto/update-demand-param.dto';
import { DemandParam } from './entities/demand-param.entity';

@Injectable()
export class DemandParamRepository{

  async create(demandparam: CreateDemandParamDto) {
    return await DemandParam.create(demandparam);
  }

  async findAll() {
    return await DemandParam.findAll();
  }

  async findOne(id: number) {
    const demandparam = await DemandParam.findByPk(id);
    return demandparam;
  }

  async update(id: number, demandparam: UpdateDemandParamDto) {
    const demandparambd = await DemandParam.findByPk(id);
    if (!demandparambd) {
      return 'demand parameters not found';
    }
    await DemandParam.update(demandparam, { where: { id } });
    return await this.findOne(id);
  }

  async remove(id: number) {
    const demandparam = await DemandParam.findOne({ where: { id: id } });
    if (!demandparam) {
      return 'demand parameters not found';
    }
    return await DemandParam.destroy({ where: { id } });
  }
}
