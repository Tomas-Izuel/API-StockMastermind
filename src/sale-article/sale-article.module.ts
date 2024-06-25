import { Module } from '@nestjs/common';
import { SaleArticleService } from './sale-article.service';
import { SaleArticleController } from './sale-article.controller';

@Module({
  controllers: [SaleArticleController],
  providers: [SaleArticleService],
})
export class SaleArticleModule {}
