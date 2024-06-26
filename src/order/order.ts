import { Injectable } from '@nestjs/common';
import { Order, OrderCreationAttributes } from './entities/order.entity';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderRepository {
  async create(createOrderDto: OrderCreationAttributes) {
    return Order.create(createOrderDto);
  }

  async findAll() {
    return Order.findAll();
  }

  async findOne(id: number) {
    return Order.findByPk(id);
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    return Order.update(updateOrderDto, { where: { id } });
  }

  async remove(id: number) {
    return Order.destroy({ where: { id } });
  }
}
