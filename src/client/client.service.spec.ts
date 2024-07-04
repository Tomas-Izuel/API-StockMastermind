import { Test, TestingModule } from '@nestjs/testing';
import { ClientService } from './client.service';

// En este archivo se importan las dependencias necesarias para realizar las pruebas unitarias.

describe('ClientService', () => {
  let service: ClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientService],
    }).compile();

    service = module.get<ClientService>(ClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
