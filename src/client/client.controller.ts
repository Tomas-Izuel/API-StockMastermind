import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

// Definimos el controlador de clientes. Un controlador es una clase que se encarga de manejar las peticiones HTTP relacionadas con los clientes.

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  // Definimos el método create, que recibe un objeto de tipo CreateClientDto y crea un nuevo cliente en la base de datos

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientService.create(createClientDto);
  }

  // Definimos el método findAll, que retorna todos los clientes de la base de datos

  @Get()
  findAll() {
    return this.clientService.findAll();
  }

  // Definimos el método findOne, que recibe un id y retorna el cliente correspond

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.clientService.findOne(id);
  }

  // Definimos el método update, que recibe un id y un objeto de tipo UpdateClientDto, y actualiza el cliente

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateClientDto: UpdateClientDto,
  ) {
    return this.clientService.update(id, updateClientDto);
  }

  // Definimos el método remove, que recibe un id y elimina el cliente correspond

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.clientService.remove(id);
  }
}
