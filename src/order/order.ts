import { ArticleRepository } from './../article/article-repository';
import { Injectable } from '@nestjs/common';
import { Order, OrderCreationAttributes } from './entities/order.entity';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderRepository {
  constructor(private articleRepository: ArticleRepository) {}
  async create(createOrderDto: OrderCreationAttributes) {
    return Order.create(createOrderDto);
  }

  async findAll() {
    return Order.findAll();
  }

  async findOne(id: number) {
    return Order.findByPk(id);
  }

  async updateStock(id: number, qty: number, order: any) {
    const article = await this.articleRepository.findOne(id);
    const {article_id,quantity,order_id} = order;
    if (!article) {
      throw new Error('Article not found');
    }
    const stock = article.stock + quantity;
    const orderupdate = await Order.findByPk(order_id);
    if (!orderupdate) {
      throw new Error('Order not found');
    }
   await Order.update({ status_id: 2 }, { where: { id: order_id } });
    return await article.update({ stock });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    return Order.update(updateOrderDto, { where: { id } });
  }

  async remove(id: number) {
    return Order.destroy({ where: { id } });
  }
}
