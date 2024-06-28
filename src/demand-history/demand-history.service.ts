import { Injectable } from '@nestjs/common';
import { CreateDemandHistoryDto } from './dto/create-demand-history.dto';
import { UpdateDemandHistoryDto } from './dto/update-demand-history.dto';
import { DemandHistoryRepository } from './demand-history';
@Injectable()
export class DemandHistoryService {
  constructor(private demandHistoryRepository: DemandHistoryRepository) {}
  create(createDemandHistoryDto: CreateDemandHistoryDto) {
    return this.demandHistoryRepository.create(createDemandHistoryDto);
  }

  findAll() {
    return this.demandHistoryRepository.findAll();
  }

  getDemandHistoryByArticleId(article_id: number) {
    return this.demandHistoryRepository.getDemandHistoryByArticleId(article_id);
  }

  findOne(id: number) {
    return this.demandHistoryRepository.findOne(id);
  }

  update(id: number, updateDemandHistoryDto: UpdateDemandHistoryDto) {
    return this.demandHistoryRepository.update(id, updateDemandHistoryDto);
  }

  remove(id: number) {
    return this.demandHistoryRepository.remove(id);
  }
}
