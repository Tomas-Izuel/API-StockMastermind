/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DemandService } from './demand.service';
import { DemandController } from './demand.controller';
import { ProviderModule } from 'src/provider/provider.module';
import { ArticleModule } from 'src/article/article.module';
import { OrderModule } from 'src/order/order.module';

@Module({
  providers: [DemandService],
  exports: [DemandService],
  controllers: [DemandController],
  imports: [ProviderModule, ArticleModule, OrderModule],
})
export class DemandModule {}
