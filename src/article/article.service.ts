import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { ArticleRepository } from './article-repository';
import { UpdateArticleDto } from './dto/update-article.dto';


// Definimos el servicio de artículos. Un servicio es una clase decorada con @Injectable que contiene la lógica de negocio de nuestra aplicación.

@Injectable()
export class ArticleService {
  constructor(private articleRepository: ArticleRepository) {}

  // Definimos el método create, que recibe un objeto de tipo CreateArticleDto y crea un nuevo artículo en la base de datos.
  create(createArticleDto: CreateArticleDto) {
    return this.articleRepository.create(createArticleDto);
  }

  // Definimos el método findAll, que retorna todos los artículos de la base de datos.
  findAll() {
    return this.articleRepository.findAll();
  }

  // Definimos el método findOne, que recibe un id y retorna el artículo correspond
  findOne(id: number) {
    return this.articleRepository.findOne(id);
  }

  // Definimos el método update, que recibe un id y un objeto de tipo UpdateArticleDto, y actualiza el artículo
  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.articleRepository.update(id, updateArticleDto);
  }

  // Definimos el método remove, que recibe un id y elimina el artículo correspondiente
  remove(id: number) {
    return this.articleRepository.remove(id);
  }
}
