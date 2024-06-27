import { Injectable } from '@nestjs/common';
import { CreateOrderStatusDto } from './dto/create-order-status.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';
import { OrderStatusRepository } from './order-status';

@Injectable()
export class OrderStatusService {
  constructor(private orderStatusRepository: OrderStatusRepository) {}

  async create(createOrderStatusDto: CreateOrderStatusDto) {
    const defaultStatus = await this.orderStatusRepository.findDefault();

    if (createOrderStatusDto.is_default && defaultStatus) {
      await this.orderStatusRepository.update(defaultStatus.id, {
        is_default: false,
      });
    }
    return this.orderStatusRepository.createOrderStatus(createOrderStatusDto);
  }

  async findAll() {
    return this.orderStatusRepository.findAll();
  }

  async findOne(id: number) {
    return this.orderStatusRepository.findOne(id);
  }

  async update(id: number, updateOrderStatusDto: UpdateOrderStatusDto) {
    if (updateOrderStatusDto.is_default) {
      const defaultStatus = await this.orderStatusRepository.findDefault();
      if (defaultStatus) {
        await this.orderStatusRepository.update(defaultStatus.id, {
          is_default: false,
        });
      }
    }
    return this.orderStatusRepository.update(id, updateOrderStatusDto);
  }

  async remove(id: number) {
    return this.orderStatusRepository.remove(id);
  }

  async findDefault() {
    return this.orderStatusRepository.findDefault();
  }
}
