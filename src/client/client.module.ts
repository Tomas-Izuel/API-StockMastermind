import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { ClientRepository } from './client-repository';

// Definimos el módulo de clientes. Un módulo es una clase decorada con @Module que agrupa los componentes de un dominio en particular.

@Module({
  controllers: [ClientController],
  providers: [ClientService, ClientRepository],
})
export class ClientModule {}
