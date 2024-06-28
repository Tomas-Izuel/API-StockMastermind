import { Injectable } from '@nestjs/common';
import { DemandHistory } from './entities/demand-history.entity';
import { CreateDemandHistoryDto } from './dto/create-demand-history.dto';
import { UpdateDemandHistoryDto } from './dto/update-demand-history.dto';
import * as moment from 'moment';
@Injectable()
export class DemandHistoryRepository {
  async create(demandHistory: CreateDemandHistoryDto) {
    const period = moment(demandHistory.period, 'DD/MM/YYYY').toDate();
    const quantity_demand = demandHistory.quantity_demand;
    const article_id = demandHistory.article_id;
    return await DemandHistory.create({ period, quantity_demand, article_id });
  }

  async findAll() {
    return await DemandHistory.findAll();
  }

  async getDemandHistoryByArticleId(article_id: number) {
    return await DemandHistory.findAll({ where: { article_id } });
  }

  async findOne(id: number) {
    const demandHistory = await DemandHistory.findByPk(id);
    if (!demandHistory) {
      return 'demandHistory not found';
    }
    return demandHistory;
  }

  async update(id: number, demandHistory: UpdateDemandHistoryDto) {
    const demandHistorybd = await DemandHistory.findByPk(id);
    if (!demandHistorybd) {
      return 'demandHistory not found';
    }
    await DemandHistory.update(demandHistory, { where: { id } });
    return await this.findOne(id);
  }

  async remove(id: number) {
    const demandHistory = await DemandHistory.findByPk(id);
    if (!demandHistory) {
      return 'demandHistory not found';
    }
    return await DemandHistory.destroy({ where: { id } });
  }
}
