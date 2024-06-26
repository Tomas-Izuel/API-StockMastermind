import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientRepository } from './client-repository';

@Injectable()
export class ClientService {
  constructor(private clientRepository: ClientRepository) {}

  create(createClientDto: CreateClientDto) {
    return this.clientRepository.create(createClientDto);
  }

  findAll() {
    return this.clientRepository.findAll();
  }

  findOne(cuit: number) {
    return this.clientRepository.findOne(cuit);
  }

  update(cuit: number, updateClientDto: UpdateClientDto) {
    return this.clientRepository.update(cuit, updateClientDto);
  }

  remove(cuit: number) {
    return this.clientRepository.remove(cuit);
  }
}
