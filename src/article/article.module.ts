import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { ArticleRepository } from './article-repository';
import { DemandParamsModule } from 'src/demand-param/demand-params.module';
import { ProviderModule } from 'src/provider/provider.module';
import { PredictedDemandModule } from 'src/predicted-demand/predicted-demand.module';

@Module({
  controllers: [ArticleController],
  providers: [ArticleService, ArticleRepository],
  exports: [ArticleService],
  imports:[DemandParamsModule,ProviderModule,PredictedDemandModule],
})
export class ArticleModule {}
