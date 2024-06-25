import { Module } from '@nestjs/common';
import { SaleRepository } from './sale-repository';
import { SaleService } from './sale.service';

@Module({
  providers: [SaleRepository, SaleService],
})
export class SaleModule {}
