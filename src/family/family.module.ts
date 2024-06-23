import { Module } from '@nestjs/common';
import { FamilyService } from './family.service';
import { FamilyController } from './family.controller';
import { Family } from './family';

@Module({
  controllers: [FamilyController],
  providers: [FamilyService, Family],
})
export class FamilyModule {}
