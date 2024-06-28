import { Test, TestingModule } from '@nestjs/testing';
import { DemandHistory } from './demand-history';

describe('DemandHistory', () => {
  let provider: DemandHistory;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemandHistory],
    }).compile();

    provider = module.get<DemandHistory>(DemandHistory);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
