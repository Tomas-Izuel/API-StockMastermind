export interface GenericCalculateDemandParams {
  param1: number;
  param2: number;
}

export abstract class Demand {
  constructor(public name: string) {}

  abstract Calculate(params: GenericCalculateDemandParams): number;
}
