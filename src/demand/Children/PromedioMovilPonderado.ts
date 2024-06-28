import { Demand, GenericCalculateDemandParams } from '../demand';

interface CalculateDemandParams extends GenericCalculateDemandParams {
  param1: number;
  param2: number;
  param3: number;
}

export class PromedioMovilPonderado extends Demand {
    constructor() {
      super('PromedioMovil');
    }
  
    Calculate(params: CalculateDemandParams): number {
      return params.param1 + params.param2;
    }
  }
  