/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateFamilyDto } from './dto/create-family.dto';
import { Family } from './entities/family.entity';
import { Article } from 'src/article/entities/article.entity';

@Injectable()
export class FamilyRepository {
  async create(createFamilyDto: CreateFamilyDto) {
    return Family.create(createFamilyDto);
  }

  async findAll() {
    return Family.findAll();
  }

  async findOne(id: number) {
    const family = await Family.findByPk(id);
    if (!family) {
      return 'Family not found';
    }
    return Family.findByPk(id);
  }

  async update(id: number, updateFamilyDto: CreateFamilyDto) {
    const family = await Family.findByPk(id);
    if (!family) {
      return 'Family not found';
    }
    await Family.update(updateFamilyDto, { where: { id } });
    return Family.findByPk(id);
  }

  async remove(id: number) {
    const article = await Article.findOne({ where: { family_id: id } });
    if (article) {
      return 'Family has articles, not deleted';
    }
    const family = await Family.findByPk(id);
    if (!family) {
      return 'Family not found';
    }
    return Family.destroy({ where: { id } });
  }
}
