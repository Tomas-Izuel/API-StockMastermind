import { Injectable } from '@nestjs/common';
import { Provider } from './entities/provider.entity';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { ProviderArticle } from 'src/provider-article/entities/provider-article.entity';

@Injectable()
export class ProviderRepository {
  constructor() {}
  async createProvider(createProviderDto: CreateProviderDto) {
    return Provider.create({
      ...createProviderDto,
      is_default: createProviderDto.is_default || false,
    });
  }

  async findAll() {
    return Provider.findAll();
  }

  async findOne(id: number) {
    return Provider.findByPk(id, {
      include: {
        model: ProviderArticle,
        attributes: [
          'id',
          'sale_price',
          'security_stock',
          'article_id',
          'max_stock',
          'request_stock',
        ],
      },
    });
  }

  async findByArticleId(id: number) {
    return await Provider.findOne({
      where: { is_default: true },
      include: [{
        model: ProviderArticle,
        where: { article_id: id },
      }],
    });
    }
  

  async findDefault() {
    return Provider.findOne({
      where: { is_default: true },
    });
  }

  async update(id: number, updateProviderDto: UpdateProviderDto) {
    return Provider.update(updateProviderDto, { where: { id } });
  }

  async delete(id: number) {
    return Provider.destroy({ where: { id } });
  }
}
