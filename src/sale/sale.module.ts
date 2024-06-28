import { Module } from '@nestjs/common';
import { SaleRepository } from './sale-repository';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';
import { OrderModule } from 'src/order/order.module';

@Module({
  controllers: [SaleController],
  providers: [SaleRepository, SaleService],
  imports: [OrderModule],
  exports: [SaleService]
})
export class SaleModule {}
