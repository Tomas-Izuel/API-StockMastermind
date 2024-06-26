import { Injectable } from '@nestjs/common';
import { GenericCalculateDemandParams } from './demand';
import { DemandNames, factoryDemand } from './factory';

@Injectable()
export class DemandService {
  constructor() {}

  Calculate(params: GenericCalculateDemandParams, methot: DemandNames): number {
    const Demand = factoryDemand(methot);
    return 1;
  }
}
