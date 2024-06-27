export interface UpdatePredictedDemandDto {
    period?: Date;
    quantity?: number;
    calculated_error?: number;
    selected?: boolean;
    demand_param_id?: number;
    article_id?: number;
  }
