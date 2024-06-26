import { Test, TestingModule } from '@nestjs/testing';
import { DemandParamsService } from './demand-params.service';

describe('DemandParamsService', () => {
  let service: DemandParamsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemandParamsService],
    }).compile();

    service = module.get<DemandParamsService>(DemandParamsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
