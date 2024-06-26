import { Injectable } from '@nestjs/common';
import { OrderStatus } from './entities/order-status.entity';
import { CreateOrderStatusDto } from './dto/create-order-status.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';

@Injectable()
export class OrderStatusRepository {
  async createOrderStatus(createOrderStatusDto: CreateOrderStatusDto) {
    return OrderStatus.create({
      ...createOrderStatusDto,
      is_default: createOrderStatusDto.is_default || false,
    });
  }

  async findAll() {
    return OrderStatus.findAll();
  }

  async findOne(id: number) {
    return OrderStatus.findByPk(id);
  }

  async findDefault() {
    return OrderStatus.findOne({ where: { is_default: true } });
  }

  async update(id: number, updateOrderStatusDto: UpdateOrderStatusDto) {
    return OrderStatus.update(updateOrderStatusDto, { where: { id } });
  }

  async remove(id: number) {
    return OrderStatus.destroy({ where: { id } });
  }
}
