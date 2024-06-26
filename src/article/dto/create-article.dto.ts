export interface CreateArticleDto {
  name: string;
  model: string;
  description: string;
  brand: string;
  storage_cost: number;
  family_id: number;
  stock: number;
  price: number;
  max_stock: number;
  security_stock: number;
  request_point: number;
}
