import { PromedioMovil } from './Children/PromedioMovil';
import { PromedioMovilPonderado } from './Children/PromedioMovilPonderado';
import { PromedioPonderadoExponencial } from './Children/PromedioPonderadoExponencial';

export enum DemandNames {
  PROMEDIO_MOVIL = 'PromedioMovil',
  PROMEDIO_PONDERADO = 'PromedioPonderado',
  PROMEDIO_PONDERADO_EXPONENCIAL = 'PromedioPonderadoExponencial',
}

export const factoryDemand = (name: DemandNames) => {
  switch (name) {
    case DemandNames.PROMEDIO_MOVIL:
      return new PromedioMovil();
    case DemandNames.PROMEDIO_PONDERADO:
      return new PromedioMovilPonderado();
    case DemandNames.PROMEDIO_PONDERADO_EXPONENCIAL:
      return new PromedioPonderadoExponencial();
    default:
      throw new Error('Demand not found');
  }
};
