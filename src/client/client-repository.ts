import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientRepository {
  // Definimos el método create, que recibe un objeto de tipo CreateClientDto y crea un nuevo cliente en la base de datos.
  async create(client: CreateClientDto) {
    const clientbd = await Client.findOne({ where: { cuit: client.cuit } });
    if (clientbd) {
      return 'client already exists';
    }
    return await Client.create(client);
  }

  // Definimos el método findAll, que retorna todos los clientes de la base de datos.
  async findAll() {
    return await Client.findAll();
  }

  // Definimos el método findOne, que recibe un cuit y retorna el cliente correspondiente.
  async findOne(cuit: number) {
    const client = await Client.findByPk(cuit);
    if (!client) {
      return 'client not found';
    }
    return client;
  }

  // Definimos el método update, que recibe un cuit y un objeto de tipo UpdateClientDto, y actualiza el cliente
  async update(cuit: number, client: UpdateClientDto) {
    const clientbd = await Client.findByPk(cuit);
    if (!clientbd) {
      return 'client not found';
    }
    await Client.update(client, { where: { cuit } });
    return await this.findOne(cuit);
  }

  // Definimos el método remove, que recibe un cuit y elimina el cliente correspondiente
  async remove(cuit: number) {
    const client = await Client.findOne({ where: { cuit: cuit } });
    if (!client) {
      return 'client not found';
    }
    return await Client.destroy({ where: { cuit } });
  }
}
