import { Test, TestingModule } from '@nestjs/testing';
import { PredictedDemandService } from './predicted-demand.service';

describe('PredictedDemandService', () => {
  let service: PredictedDemandService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PredictedDemandService],
    }).compile();

    service = module.get<PredictedDemandService>(PredictedDemandService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
