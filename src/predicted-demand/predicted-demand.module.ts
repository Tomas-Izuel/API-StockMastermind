import { Module } from '@nestjs/common';
import { PredictedDemandService } from './predicted-demand.service';
import { PredictedDemandController } from './predicted-demand.controller';
import { PredictedDemandRepository } from './predicted-demand-repository';

@Module({
  controllers: [PredictedDemandController],
  providers: [PredictedDemandService,PredictedDemandRepository]
})
export class PredictedDemandModule {}
