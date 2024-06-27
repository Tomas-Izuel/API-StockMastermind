export interface CreatePredictedDemandDto {
    period: Date;
    quantity: number;
    price_proyected: number;
    calculated_error: number;
    selected: boolean;
    demand_param_id: number;
    article_id: number;
  }