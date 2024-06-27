export interface CreatePredictedDemandDto {
    period: Date;
    quantity: number;
    price_proyected: number;
    calculated_error: number;
    selected: boolean;
    DemandParam_id: number;
  }