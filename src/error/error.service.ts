import { Injectable } from '@nestjs/common';
import { CalculateErrorParams } from './interface';
import { ErrorNames, factoryErrorCalculation } from './factory';

@Injectable()
export class ErrorCalculationService {
  async Calculate(
    params: CalculateErrorParams,
    method: ErrorNames,
  ): Promise<number> {
    const errorCalculation = factoryErrorCalculation(method);
    return errorCalculation.Calculate(params);
  }
}
