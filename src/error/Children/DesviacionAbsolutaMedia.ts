import { ErrorCalculation } from "../error";
import { CalculateErrorParams } from "../interface";

export class DesviacionAbsolutaMedia extends ErrorCalculation {
  constructor() {
    super('MeanAbsoluteDeviation');
  }

  async Calculate(params: CalculateErrorParams): Promise<number> {
    const { actual, predicted } = params;
    const sum = actual.reduce(
      (acc, value, index) => acc + Math.abs(value - predicted[index]),
      0,
    );
    return sum / actual.length;
  }
}
