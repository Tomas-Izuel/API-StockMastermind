import { Injectable } from '@nestjs/common';
import { Article } from './entities/article.entity';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Family } from 'src/family/entities/family.entity';
@Injectable()
export class ArticleRepository {
  async create(article: CreateArticleDto) {
    return await Article.create(article);
  }

  async findAll() {
    return await Article.findAll({ include: { model: Family } });
  }

  async findOne(id: number) {
    const article = await Article.findByPk(id, { include: { model: Family } });
    if (!article) {
      throw new Error('article not found');
    }
    return article;
  }

  async update(id: number, article: UpdateArticleDto) {
    const articlebd = await Article.findByPk(id);
    if (!articlebd) {
      return 'article not found';
    }
    await Article.update(article, { where: { id } });
    return await this.findOne(id);
  }

  async remove(id: number) {
    const article = await Article.findByPk(id, { include: { model: Family } });
    if (!article) {
      return 'article not found';
    }
    return await Article.destroy({ where: { id } });
  }
}
