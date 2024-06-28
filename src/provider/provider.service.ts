import { Injectable } from '@nestjs/common';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { ProviderRepository } from './provider';
import { ProviderArticleService } from 'src/provider-article/provider-article.service';
import { CreateProviderArticleDto } from 'src/provider-article/dto/create-provider-article.dto';

@Injectable()
export class ProviderService {
  constructor(
    private providerRepository: ProviderRepository,
    private providerArticleService: ProviderArticleService,
  ) {}

  default() {
    return this.providerRepository.findDefault();
  }

  create(createProviderDto: CreateProviderDto) {
    return this.providerRepository.createProvider(createProviderDto);
  }

  findAll() {
    return this.providerRepository.findAll();
  }

  findOne(id: number) {
    return this.providerRepository.findOne(id);
  }

  update(id: number, updateProviderDto: UpdateProviderDto) {
    return this.providerRepository.update(id, updateProviderDto);
  }

  remove(id: number) {
    return `This action removes a #${id} provider`;
  }

  getArticles(id: number) {
    return this.providerArticleService.findAllByProviderId(id);
  }

  addArticle(providerId: number, data: CreateProviderArticleDto) {
    return this.providerArticleService.create(providerId, data);
  }

  addManyArticles(providerId: number, data: CreateProviderArticleDto[]) {
    return this.providerArticleService.createMany(providerId, data);
  }
}
