import { ErrorCalculation } from "../error";
import { CalculateErrorParams } from "../interface";

export class ErrorCuadraticoMedio extends ErrorCalculation {
    constructor() {
      super('MeanSquaredError');
    }
  
    async Calculate(params: CalculateErrorParams): Promise<number> {
      const { actual, predicted } = params;
      const sum = actual.reduce((acc, value, index) => acc + Math.pow(value - predicted[index], 2), 0);
      return sum / actual.length;
    }
  }
  