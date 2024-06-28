import { DesviacionAbsolutaMedia } from './Children/DesviacionAbsolutaMedia';
import { ErrorCuadraticoMedio } from './Children/ErrorCuadraticoMedio';
import { ErrorPorcentualAbsolutoMedio } from './Children/ErrorPorcentualAbsolutoMedio';

export enum ErrorNames {
  MEAN_ABSOLUTE_DEVIATION = 'MeanAbsoluteDeviation',
  MEAN_SQUARED_ERROR = 'MeanSquaredError',
  MEAN_ABSOLUTE_PERCENTAGE_ERROR = 'MeanAbsolutePercentageError',
}

export const factoryErrorCalculation = (name: ErrorNames) => {
  switch (name) {
    case ErrorNames.MEAN_ABSOLUTE_DEVIATION:
      return new DesviacionAbsolutaMedia();
    case ErrorNames.MEAN_SQUARED_ERROR:
      return new ErrorCuadraticoMedio();
    case ErrorNames.MEAN_ABSOLUTE_PERCENTAGE_ERROR:
      return new ErrorPorcentualAbsolutoMedio();
    default:
      throw new Error('Error calculation method not found');
  }
};
