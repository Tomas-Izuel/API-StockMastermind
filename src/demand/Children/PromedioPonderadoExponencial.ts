import { DemandHistory } from 'src/demand-history/entities/demand-history.entity';
import { Demand } from '../demand';
import { CalculateDemandParams } from '../interfaces';

// En este archivo definimos la clase PromedioMovilPonderado que extiende de la clase Demand.

export class PromedioMovilPonderadoSuavizadoExponencialmente extends Demand {
  constructor() {
    super('PromedioMovilPonderadoSuavizadoExponencialmente');
  }

  // Definimos el método Calculate que recibe un objeto de tipo CalculateDemandParams y retorna un número
  async Calculate(params: CalculateDemandParams): Promise<number> {
    const historicalDemand = await this.getHistoricalDemand(
      params.article_id,
      params.periods,
    );
    const alpha = params.alpha || 0.5;
    let weightedAverage = historicalDemand[0];

    for (let i = 1; i < historicalDemand.length; i++) {
      weightedAverage =
        alpha * historicalDemand[i] + (1 - alpha) * weightedAverage;
    }

    return weightedAverage;
  }

  // Definimos el método getHistoricalDemand que recibe un id de artículo y un número de períodos, y retorna un array de números
  private async getHistoricalDemand(
    article_id: number,
    periods: number,
  ): Promise<number[]> {
    const currentDate = new Date();
    const historicalDemand: number[] = [];

    for (let i = 0; i < periods; i++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - i,
        28,
      );
      const period = `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${date
        .getDate()
        .toString()
        .padStart(2, '0')} 00:00:00`;

      try {
        const demandRecord = await DemandHistory.findOne({
          where: {
            article_id,
            period,
          },
        });

        if (demandRecord) {
          historicalDemand.push(demandRecord.quantity_demand);
        } else {
          historicalDemand.push(0);
        }
      } catch (error) {
        console.error(
          `Error fetching demand record for period ${period}:`,
          error,
        );
        historicalDemand.push(0);
      }
    }
    return historicalDemand;
  }
}
