import { Injectable } from '@nestjs/common';
import { CreateDemandHistoryDto } from './dto/create-demand-history.dto';
import { UpdateDemandHistoryDto } from './dto/update-demand-history.dto';

@Injectable()
export class DemandHistoryService {
  create(createDemandHistoryDto: CreateDemandHistoryDto) {
    return 'This action adds a new demandHistory';
  }

  findAll() {
    return `This action returns all demandHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} demandHistory`;
  }

  update(id: number, updateDemandHistoryDto: UpdateDemandHistoryDto) {
    return `This action updates a #${id} demandHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} demandHistory`;
  }
}
