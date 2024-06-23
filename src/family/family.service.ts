import { Injectable } from '@nestjs/common';
import { CreateFamilyDto } from './dto/create-family.dto';
import { FamilyRepository } from './family-repository';

@Injectable()
export class FamilyService {
  familyRepository = new FamilyRepository();
  create(createFamilyDto: CreateFamilyDto) {
    return this.familyRepository.create(createFamilyDto);
  }

  findAll() {
    return this.familyRepository.findAll();
  }

  findOne(id: number) {
    return this.familyRepository.findOne(id);
  }

  update(id: number, updateFamilyDto: CreateFamilyDto) {
    return this.familyRepository.update(id, updateFamilyDto);
  }

  remove(id: number) {
    return this.familyRepository.remove(id);
  }
}
