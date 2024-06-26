import { Injectable } from '@nestjs/common';
import { ProviderArticle } from './entities/provider-article.entity';
import { CreateProviderArticleDto } from './dto/create-provider-article.dto';
import { UpdateProviderArticleDto } from './dto/update-provider-article.dto';

@Injectable()
export class ProviderArticleRepository {
  async createProviderArticle(
    createProviderArticleDto: CreateProviderArticleDto,
    providerId: number,
  ) {
    return ProviderArticle.create({
      ...createProviderArticleDto,
      provider_id: providerId,
    });
  }

  async createManyProviderArticles(
    createProviderArticleDtos: CreateProviderArticleDto[],
    providerId: number,
  ) {
    return ProviderArticle.bulkCreate(
      createProviderArticleDtos.map((dto) => ({
        ...dto,
        provider_id: providerId,
      })),
    );
  }

  async findAll() {
    return ProviderArticle.findAll();
  }

  async findOne(id: number) {
    return ProviderArticle.findByPk(id);
  }

  async update(id: number, updateProviderArticleDto: UpdateProviderArticleDto) {
    return ProviderArticle.update(updateProviderArticleDto, { where: { id } });
  }

  async delete(id: number) {
    return ProviderArticle.destroy({ where: { id } });
  }

  async findAllByProviderId(providerId: number) {
    return ProviderArticle.findAll({ where: { provider_id: providerId } });
  }
}
