import { Module } from '@nestjs/common';
import { ProviderArticleService } from './provider-article.service';
import { ProviderArticleRepository } from './provider-article';

@Module({
  controllers: [],
  providers: [ProviderArticleService, ProviderArticleRepository],
  exports: [ProviderArticleService],
})
export class ProviderArticleModule {}
