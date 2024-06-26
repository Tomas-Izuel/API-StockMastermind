import { Test, TestingModule } from '@nestjs/testing';
import { DemandParams } from './demand-params';

describe('DemandParams', () => {
  let provider: DemandParams;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemandParams],
    }).compile();

    provider = module.get<DemandParams>(DemandParams);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
