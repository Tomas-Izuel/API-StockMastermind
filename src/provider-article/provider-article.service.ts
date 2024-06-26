import { Injectable } from '@nestjs/common';
import { CreateProviderArticleDto } from './dto/create-provider-article.dto';
import { UpdateProviderArticleDto } from './dto/update-provider-article.dto';
import { ProviderArticleRepository } from './provider-article';

@Injectable()
export class ProviderArticleService {
  constructor(private providerArticleRepository: ProviderArticleRepository) {}

  create(
    providerId: number,
    createProviderArticleDto: CreateProviderArticleDto,
  ) {
    return this.providerArticleRepository.createProviderArticle(
      createProviderArticleDto,
      providerId,
    );
  }

  createMany(
    providerId: number,
    createProviderArticleDtos: CreateProviderArticleDto[],
  ) {
    return this.providerArticleRepository.createManyProviderArticles(
      createProviderArticleDtos,
      providerId,
    );
  }

  findAll() {
    return this.providerArticleRepository.findAll();
  }

  findOne(id: number) {
    return this.providerArticleRepository.findOne(id);
  }

  update(id: number, updateProviderArticleDto: UpdateProviderArticleDto) {
    return this.providerArticleRepository.update(id, updateProviderArticleDto);
  }

  remove(id: number) {
    return this.providerArticleRepository.delete(id);
  }

  findAllByProviderId(providerId: number) {
    return this.providerArticleRepository.findAllByProviderId(providerId);
  }
}
