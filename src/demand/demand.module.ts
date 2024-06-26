/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DemandService } from './demand.service';

@Module({
  providers: [DemandService],
  exports: [DemandService],
})
export class FamilyModule {}
