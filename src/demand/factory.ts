import { PromedioMovil } from './Children/PromedioMovil';

export enum DemandNames {
  PROMEDIO_MOVIL = 'PromedioMovil',
}

export const factoryDemand = (name: DemandNames) => {
  switch (name) {
    case DemandNames.PROMEDIO_MOVIL:
      return new PromedioMovil();
    default:
      throw new Error('Demand not found');
  }
};
