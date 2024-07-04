//Definimos los atributos necesarios para crear un artículo.
//Las interfaces de typescript son como definir un nuevo tipo de dato.
export interface CreateArticleDto {
  name: string;
  model: string;
  description: string;
  brand: string;
  storage_cost: number;
  family_id: number;
  stock: number;
  price: number;
}
