import { Injectable } from '@nestjs/common';
import { Sale } from './entities/sale.entity';
import { SaleArticle } from '../sale-article/entities/sale-article.entity';
import { Article } from 'src/article/entities/article.entity';
import { CreateSaleDto } from './dto/create-sale.dto';

@Injectable()
export class SaleRepository {
  async create(createSaleDto: CreateSaleDto) {
    const articleIds = createSaleDto.articles.map(
      (article) => article.article_id,
    );
    const existingArticles = await Article.findAll({
      where: {
        id: articleIds,
      },
    });
    if (existingArticles.length !== articleIds.length) {
      return 'Article not found';
    }
  }

  async findAll() {
    return await Sale.findAll();
  }

  async findOne(id: number) {
    const sale = await Sale.findByPk(id);
    if (!sale) {
      return 'Sale not found';
    }
    return sale;
  }
}
