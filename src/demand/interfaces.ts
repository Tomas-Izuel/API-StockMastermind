export interface CalculateDemandParams{
  periods: number;
  article_id: number;
  alpha?: number;
}

export interface CalculateErrorParams {
  actual: number[];
  predicted: number[];
}
