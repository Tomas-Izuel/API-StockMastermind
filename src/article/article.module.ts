import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { ArticleRepository } from './article-repository';

// Definimos el módulo de artículos. Un módulo es una clase decorada con @Module que agrupa los componentes de un dominio en particular.

@Module({
  controllers: [ArticleController],
  providers: [ArticleService, ArticleRepository],
  exports: [ArticleService, ArticleRepository],
})
export class ArticleModule {}
