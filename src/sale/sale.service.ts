import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale-dto';
import { SaleRepository } from './sale-repository';

@Injectable()
export class SaleService {
  constructor(private saleRepository: SaleRepository) {}
  create(createSaleDto: CreateSaleDto) {
    return this.saleRepository.create(createSaleDto);
  }

  findAll() {
    return this.saleRepository.findAll();
  }

  findOne(id: number) {
    return this.saleRepository.findOne(id);
  }
}
