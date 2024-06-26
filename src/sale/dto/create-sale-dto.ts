interface CreateSaleDto {
  date: Date;
  total?: number;
  client_id: number;
  articles: {
    article_id: number;
    quantity: number;
    price: number;
  }[];
}

export { CreateSaleDto };
