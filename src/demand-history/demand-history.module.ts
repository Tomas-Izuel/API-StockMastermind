import { Module } from '@nestjs/common';
import { DemandHistoryService } from './demand-history.service';
import { DemandHistoryController } from './demand-history.controller';
import { DemandHistory } from './demand-history';

@Module({
  controllers: [DemandHistoryController],
  providers: [DemandHistoryService, DemandHistory],
})
export class DemandHistoryModule {}
