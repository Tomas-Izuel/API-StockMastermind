import { ErrorCalculation } from "../error";
import { CalculateErrorParams } from "../interface";

export class ErrorPorcentualAbsolutoMedio extends ErrorCalculation {
    constructor() {
      super('MeanAbsolutePercentageError');
    }
  
    async Calculate(params: CalculateErrorParams): Promise<number> {
      const { actual, predicted } = params;
      const sum = actual.reduce((acc, value, index) => acc + Math.abs((value - predicted[index]) / value), 0);
      return (sum / actual.length) * 100;
    }
  }
  