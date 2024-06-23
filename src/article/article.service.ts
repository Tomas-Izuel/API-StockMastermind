import { Injectable } from '@nestjs/common';
import { ArticleRepository } from './article-repository';
import { CreateArticleDto } from './dto/create-article.dto';

@Injectable()
export class ArticleService {
  articleRepository = new ArticleRepository();

  create(createArticleDto: CreateArticleDto) {
    return this.articleRepository.create(createArticleDto);
  }

  findAll() {
    return this.articleRepository.findAll();
  }

  findOne(id: number) {
    return this.articleRepository.findOne(id);
  }

  update(id: number, updateArticleDto) {
    return this.articleRepository.update(id, updateArticleDto);
  }

  remove(id: number) {
    return this.articleRepository.remove(id);
  }
}
