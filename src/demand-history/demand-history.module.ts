import { Module } from '@nestjs/common';
import { DemandHistoryService } from './demand-history.service';
import { DemandHistoryController } from './demand-history.controller';
import { DemandHistoryRepository } from './demand-history';

@Module({
  controllers: [DemandHistoryController],
  providers: [DemandHistoryService, DemandHistoryRepository],
})
export class DemandHistoryModule {}
