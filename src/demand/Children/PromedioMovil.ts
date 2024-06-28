import { DemandHistory } from 'src/demand-history/entities/demand-history.entity';
import { Demand } from '../demand';
import { CalculateDemandParams } from '../interfaces';

export class PromedioMovil extends Demand {
  constructor() {
    super('PromedioMovil');
  }

  async Calculate(params: CalculateDemandParams): Promise<number> {
    const historicalDemand = await this.getHistoricalDemand(
      params.article_id,
      params.periods,
    );
    const sum = historicalDemand.reduce((acc, demand) => acc + demand, 0);
    const average = sum / params.periods;
    return average;
  }

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
