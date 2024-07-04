import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientRepository } from './client-repository';

// Definimos el servicio de clientes. Un servicio es una clase decorada con @Injectable que contiene la lógica de negocio de un dominio en particular.

@Injectable()
export class ClientService {
  constructor(private clientRepository: ClientRepository) {}

  // Definimos el método create, que recibe un objeto de tipo CreateClientDto y crea un nuevo cliente en la base de datos
  create(createClientDto: CreateClientDto) {
    return this.clientRepository.create(createClientDto);
  }

  // Definimos el método findAll, que retorna todos los clientes de la base de datos
  findAll() {
    return this.clientRepository.findAll();
  }

  // Definimos el método findOne, que recibe un cuit y retorna el cliente correspond
  findOne(cuit: number) {
    return this.clientRepository.findOne(cuit);
  }

  // Definimos el método update, que recibe un cuit y un objeto de tipo UpdateClientDto, y actualiza
  update(cuit: number, updateClientDto: UpdateClientDto) {
    return this.clientRepository.update(cuit, updateClientDto);
  }

  // Definimos el método remove, que recibe un cuit y elimina el cliente correspond
  remove(cuit: number) {
    return this.clientRepository.remove(cuit);
  }
}
