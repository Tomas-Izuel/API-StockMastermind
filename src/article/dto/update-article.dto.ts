//Definimos los atributos necesarios para actualizar un artículo.
//Las interfaces de typescript son como definir un nuevo tipo de dato.
//En este caso, los atributos son opcionales, ya que no es necesario actualizar todos los atributos de un artículo.
export interface UpdateArticleDto {
  name?: string;
  model?: string;
  description?: string;
  brand?: string;
  storage_cost?: number;
  family_id?: number;
  stock: number;
}
