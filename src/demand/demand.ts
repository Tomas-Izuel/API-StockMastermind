import { CalculateDemandParams } from './interfaces';
export abstract class Demand {
  constructor(public name: string) {}

  abstract Calculate(params: CalculateDemandParams): Promise<number>;
}
