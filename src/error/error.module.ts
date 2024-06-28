import { Module } from '@nestjs/common';
import { ErrorCalculationService } from './error.service';
import { ErrorCalculationController } from './error.controller';

@Module({
  controllers: [ErrorCalculationController],
  providers: [ErrorCalculationService],
  exports: [ErrorCalculationService],
})
export class ErrorModule {}
