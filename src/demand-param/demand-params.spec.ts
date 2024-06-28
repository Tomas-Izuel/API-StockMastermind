import { Test, TestingModule } from '@nestjs/testing';
import { DemandParamRepository } from './demand-params-repository';

describe('DemandParams', () => {
  let provider: DemandParamRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemandParamRepository],
    }).compile();

    provider = module.get<DemandParamRepository>(DemandParamRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
