//Definimos los atributos necesarios para actualizar un cliente.
//Las interfaces de typescript son como definir un nuevo tipo de dato.
//En este caso, los atributos son opcionales, ya que no es necesario actualizar todos los atributos de un cliente.

export interface UpdateClientDto {
  name?: string;
  cuit?: number;
}
