import { Injectable } from '@nestjs/common';
import { Provider } from './entities/provider.entity';
import { CreateProviderDto } from './dto/create-provider.dto';

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
    return Provider.findByPk(id);
  }

  async findDefault() {
    return Provider.findOne({ where: { is_default: true } });
  }

  async update(id: number, updateProviderDto: CreateProviderDto) {
    return Provider.update(updateProviderDto, { where: { id } });
  }

  async delete(id: number) {
    return Provider.destroy({ where: { id } });
  }
}
