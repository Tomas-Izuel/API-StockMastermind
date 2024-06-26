import { Module } from '@nestjs/common';
import { DemandParamsService } from './demand-params.service';
import { DemandParamsController } from './demand-params.controller';
import { DemandParamRepository } from './demand-params-repository';

@Module({
  controllers: [DemandParamsController],
  providers: [DemandParamsService, DemandParamRepository],
})
export class DemandParamsModule {}
