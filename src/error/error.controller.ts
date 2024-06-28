import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { ErrorCalculationService } from './error.service';
import { ErrorNames } from './factory';
import { CalculateErrorParams } from './interface';

@Controller('error-calculation')
export class ErrorCalculationController {
  constructor(
    private readonly errorCalculationService: ErrorCalculationService,
  ) {}

  @Get('calculate')
  async calculateError(
    @Query('method') method: ErrorNames,
    @Query('actual') actual: string,
    @Query('predicted') predicted: string,
  ): Promise<number> {
    const actualValues = actual.split(',').map((value) => parseFloat(value));
    const predictedValues = predicted
      .split(',')
      .map((value) => parseFloat(value));

    if (actualValues.length !== predictedValues.length) {
      throw new BadRequestException(
        'Actual and predicted arrays must have the same length',
      );
    }

    const params: CalculateErrorParams = {
      actual: actualValues,
      predicted: predictedValues,
    };

    return this.errorCalculationService.Calculate(params, method);
  }
}
