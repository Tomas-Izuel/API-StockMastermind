import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientRepository {
  async create(client: CreateClientDto) {
    const clientbd = await Client.findOne({ where: { cuit: client.cuit } });
    if (clientbd) {
      return 'client already exists';
    }
    return await Client.create(client);
  }

  async findAll() {
    return await Client.findAll();
  }

  async findOne(cuit: number) {
    const client = await Client.findByPk(cuit);
    if (!client) {
      return 'client not found';
    }
    return client;
  }

  async update(cuit: number, client: UpdateClientDto) {
    const clientbd = await Client.findByPk(cuit);
    if (!clientbd) {
      return 'client not found';
    }
    await Client.update(client, { where: { cuit } });
    return await this.findOne(cuit);
  }

  async remove(cuit: number) {
    const client = await Client.findOne({ where: { cuit: cuit } });
    if (!client) {
      return 'client not found';
    }
    return await Client.destroy({ where: { cuit } });
  }
}
