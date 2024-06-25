export interface CreateSaleDto {
  date: Date;
  client_id: number;
  articles: {
    article_id: number;
    quantity: number;
  }[];
}
