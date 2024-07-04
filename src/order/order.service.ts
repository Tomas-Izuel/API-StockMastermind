import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderStatusService } from 'src/order-status/order-status.service';
import { ProviderService } from 'src/provider/provider.service';
import { ArticleService } from 'src/article/article.service';
import { OrderRepository } from './order';
import { FINISHED_STATUS_NAME } from 'src/lib/constants';

@Injectable()
export class OrderService {
  constructor(
    private orderStatusService: OrderStatusService,
    private providerService: ProviderService,
    private articleService: ArticleService,
    private orderRepository: OrderRepository,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const existingProvider = await this.providerService.findOne(
      createOrderDto.provider_id,
    );
    if (!existingProvider) {
      throw new Error('Provider not found');
    }
    const existingArticle = await this.articleService.findOne(
      createOrderDto.article_id,
    );
    if (!existingArticle) {
      throw new Error('Article not found or out of stock');
    }

    const defaultStatus = await this.orderStatusService.findDefault();

    return this.orderRepository.create({
      ...createOrderDto,
      status_id: defaultStatus.id,
    });
  }

  async updateStock(id: number,quantity: number, order_id: number) {
    return await this.orderRepository.updateStock(id,quantity,order_id);
  }

  findAll() {
    return this.orderRepository.findAll();
  }

  findOne(id: number) {
    return this.orderRepository.findOne(id);
  }

  remove(id: number) {
    return this.orderRepository.remove(id);
  }
}
