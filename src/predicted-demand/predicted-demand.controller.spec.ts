import { Test, TestingModule } from '@nestjs/testing';
import { PredictedDemandController } from './predicted-demand.controller';

describe('PredictedDemandController', () => {
  let controller: PredictedDemandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PredictedDemandController],
    }).compile();

    controller = module.get<PredictedDemandController>(PredictedDemandController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
