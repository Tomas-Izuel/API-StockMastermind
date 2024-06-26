import { Module } from '@nestjs/common';
import { SaleRepository } from './sale-repository';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';

@Module({
  controllers: [SaleController],
  providers: [SaleRepository, SaleService],
})
export class SaleModule {}
