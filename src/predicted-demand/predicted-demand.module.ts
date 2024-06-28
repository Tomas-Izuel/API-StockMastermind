import { Module, forwardRef } from '@nestjs/common';
import { PredictedDemandService } from './predicted-demand.service';
import { PredictedDemandController } from './predicted-demand.controller';
import { PredictedDemandRepository } from './predicted-demand-repository';
import { ArticleModule } from 'src/article/article.module';
import { DemandParamsModule } from 'src/demand-param/demand-params.module';

@Module({
  controllers: [PredictedDemandController],
  providers: [PredictedDemandService,PredictedDemandRepository],
  imports:[ArticleModule,DemandParamsModule],
  exports:[PredictedDemandService],
})
export class PredictedDemandModule {}
