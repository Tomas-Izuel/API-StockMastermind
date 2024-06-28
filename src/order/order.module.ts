import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderRepository } from './order';
import { OrderStatusModule } from 'src/order-status/order-status.module';
import { ProviderModule } from 'src/provider/provider.module';
import { ArticleModule } from 'src/article/article.module';

@Module({
  controllers: [OrderController],
  providers: [OrderService, OrderRepository],
  imports: [OrderStatusModule, ProviderModule, ArticleModule],
  exports: [OrderService],
})
export class OrderModule {}
