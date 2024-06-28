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

  findAll() {
    return this.orderRepository.findAll();
  }

  findOne(id: number) {
    return this.orderRepository.findOne(id);
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const existingOrder = await this.orderRepository.findOne(id);
    if (!existingOrder) {
      throw new Error('Order not found');
    }
    const statusOrder = await this.orderStatusService.findOne(
      existingOrder.status_id,
    );
    const articleOrder = await this.articleService.findOne(
      existingOrder.article_id,
    );

    if (!articleOrder) {
      throw new Error('Article not found');
    }

    if (
      (updateOrderDto.article_id || updateOrderDto.provider_id) &&
      !statusOrder.is_default
    ) {
      throw new Error(
        'Order cannot be updated, the order is not in default status',
      );
    }

    if (updateOrderDto.quantity > articleOrder.stock) {
      throw new Error('Article out of stock');
    }

    if (updateOrderDto.subtotal || updateOrderDto.total) {
      throw new Error('Subtotal and total cannot be updated');
    }

    return this.orderRepository.update(id, updateOrderDto);
  }

  async updateArticleWhenOrderIsDone(id: number, quantity: number) {
    const existingArticle = await this.articleService.findOne(id);
    if (!existingArticle) {
      throw new Error('Article not found');
    }

    return this.articleService.update(id, {
      stock: existingArticle.stock + quantity,
    });
  }

  async updateStatus(id: number, status_id: number) {
    const existingOrder = await this.orderRepository.findOne(id);
    if (!existingOrder) {
      throw new Error('Order not found');
    }
    const statusOrder = await this.orderStatusService.findOne(status_id);
    if (!statusOrder) {
      throw new Error('Status not found');
    }

    if (!statusOrder.is_default) {
      throw new Error('Status cannot be updated');
    }

    if (statusOrder.name === FINISHED_STATUS_NAME) {
      await this.updateArticleWhenOrderIsDone(
        existingOrder.article_id,
        existingOrder.quantity,
      );
    }

    return this.orderRepository.update(id, { status_id: statusOrder.id });
  }

  remove(id: number) {
    return this.orderRepository.remove(id);
  }
}
