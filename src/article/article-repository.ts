import { Injectable } from '@nestjs/common';
import { Article } from './entities/article.entity';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Family } from 'src/family/entities/family.entity';

// Definimos el repositorio de artículos. Un repositorio es una clase que se encarga de interactuar con la base de datos.

@Injectable()
export class ArticleRepository {
  // Definimos el método create, que recibe un objeto de tipo CreateArticleDto y crea un nuevo artículo en la base de datos.
  async create(article: CreateArticleDto) {
    return await Article.create(article);
  }

  // Definimos el método findAll, que retorna todos los artículos de la base de datos.
  async findAll() {
    return await Article.findAll({ include: { model: Family } });
  }

  // Definimos el método findOne, que recibe un id y retorna el artículo correspondiente.
  async findOne(id: number) {
    const article = await Article.findByPk(id, { include: { model: Family } });
    if (!article) {
      throw new Error('article not found');
    }
    return article;
  }

  // Definimos el método update, que recibe un id y un objeto de tipo UpdateArticleDto, y actualiza el artículo
  async update(id: number, article: UpdateArticleDto) {
    const articlebd = await Article.findByPk(id);
    if (!articlebd) {
      return 'article not found';
    }
    await Article.update(article, { where: { id } });
    return await this.findOne(id);
  }

  // Definimos el método remove, que recibe un id y elimina el artículo correspondiente
  async remove(id: number) {
    const article = await Article.findByPk(id, { include: { model: Family } });
    if (!article) {
      return 'article not found';
    }
    return await Article.destroy({ where: { id } });
  }
}
