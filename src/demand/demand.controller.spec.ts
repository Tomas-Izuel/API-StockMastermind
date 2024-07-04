import { Test, TestingModule } from '@nestjs/testing';
import { DemandController } from './demand.controller';

// En este archivo se importan las dependencias necesarias para realizar las pruebas unitarias.

describe('DemandController', () => {
  let controller: DemandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemandController],
    }).compile();

    controller = module.get<DemandController>(DemandController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
