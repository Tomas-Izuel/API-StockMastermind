import { Test, TestingModule } from '@nestjs/testing';
import { SaleRepository } from './sale-repository';

describe('SaleRepository', () => {
  let provider: SaleRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaleRepository],
    }).compile();

    provider = module.get<SaleRepository>(SaleRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
