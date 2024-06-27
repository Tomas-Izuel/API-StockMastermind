export interface UpdatePredictedDemandDto {
    period?: Date;
    quantity?: number;
    price_proyected?: number;
    calculated_error?: number;
    selected?: boolean;
    demandParam_id?: number;
    article_id?: number;
  }