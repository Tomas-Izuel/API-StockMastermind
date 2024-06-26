import { Injectable } from '@nestjs/common';
import { Sale } from './entities/sale.entity';
import { SaleArticle } from '../sale-article/entities/sale-article.entity';
import { Article } from 'src/article/entities/article.entity';
import { CreateSaleDto } from './dto/create-sale-dto';

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
    const articles_filter: Article[] = [];
    for (const article of existingArticles) {
      const articleData = createSaleDto.articles.find(
        (data) => data.article_id === article.id,
      );
      if (articleData.quantity > article.stock) {
        return `Article ${article.id} out of stock`;
      }
      articles_filter.push(article);
    }
    for (const article of articles_filter) {
      const articleData = createSaleDto.articles.find(
        (data) => data.article_id === article.id,
      );
      const stock = article.dataValues.stock - articleData.quantity;
      await article.update({ stock });
    }
    const sale = await Sale.create({
      date: createSaleDto.date,
      client_id: createSaleDto.client_id,
    });
    const total = articles_filter.reduce((acc, article) => {
      const articleData = createSaleDto.articles.find(
        (data) => data.article_id === article.id,
      );
      return acc + articleData.quantity * article.dataValues.price;
    }, 0);
    await sale.update({ total });
    const saleArticles = createSaleDto.articles.map((article) => ({
      sale_id: sale.id,
      article_id: article.article_id,
      quantity: article.quantity,
      price: article.price,
    }));
    await SaleArticle.bulkCreate(saleArticles);
    return sale;
  }

  async findAll() {
    return await Sale.findAll({
      include: [
        {
          model: SaleArticle,
          include: [Article],
        },
      ],
    });
  }

  async findOne(id: number) {
    const sale = await Sale.findByPk(id, {
      include: [
        {
          model: SaleArticle,
          include: [Article],
        },
      ],
    });
    if (!sale) {
      return 'Sale not found';
    }
    return sale;
  }
}
