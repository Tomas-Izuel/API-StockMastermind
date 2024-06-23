import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { Article } from './article';

@Module({
  controllers: [ArticleController],
  providers: [ArticleService, Article],
})
export class ArticleModule {}
