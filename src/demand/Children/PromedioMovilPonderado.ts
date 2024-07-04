import { DemandHistory } from 'src/demand-history/entities/demand-history.entity';
import { Demand } from '../demand';
import { CalculateDemandParams } from '../interfaces';

// En este archivo definimos la clase PromedioMovilPonderado que extiende de la clase Demand.

export class PromedioMovilPonderado extends Demand {
  constructor() {
    super('PromedioMovilPonderado');
  }

  // Definimos el método Calculate que recibe un objeto de tipo CalculateDemandParams y retorna un número
  async Calculate(params: CalculateDemandParams): Promise<number> {
    const historicalDemand = await this.getHistoricalDemand(
      params.article_id,
      params.periods,
    );
    const weights = this.calculateWeights(params.periods);
    const weightedSum = historicalDemand.reduce((acc, demand, index) => {
      return acc + demand * weights[index];
    }, 0);

    return weightedSum;
  }

  // Definimos el método calculateWeights que recibe un número de períodos y retorna un array de números
  private calculateWeights(periods: number): number[] {
    const weights: number[] = [];
    let sum = 0;

    for (let i = periods; i > 0; i--) {
      weights.push(i);
      sum += i;
    }

    return weights.map(weight => weight / sum);
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
      ); // Día fijo 28
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
