import { Module } from '@nestjs/common';
import { FamilyService } from './family.service';
import { FamilyController } from './family.controller';
import { FamilyRepository } from './family-repository';

@Module({
  controllers: [FamilyController],
  providers: [FamilyService, FamilyRepository],
})
export class FamilyModule {}
