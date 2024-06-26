import { Module } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { ProviderController } from './provider.controller';
import { ProviderRepository } from './provider';
import { ProviderArticleModule } from 'src/provider-article/provider-article.module';

@Module({
  controllers: [ProviderController],
  providers: [ProviderService, ProviderRepository],
  exports: [ProviderService],
  imports: [ProviderArticleModule],
})
export class ProviderModule {}
