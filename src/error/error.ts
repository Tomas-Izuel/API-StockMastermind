import { CalculateErrorParams } from "./interface";

export abstract class ErrorCalculation {
  constructor(public name: string) {}

  abstract Calculate(params: CalculateErrorParams): Promise<number>;
}
