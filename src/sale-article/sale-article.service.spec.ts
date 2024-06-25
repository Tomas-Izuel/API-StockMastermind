import { Test, TestingModule } from '@nestjs/testing';
import { SaleArticleService } from './sale-article.service';

describe('SaleArticleService', () => {
  let service: SaleArticleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaleArticleService],
    }).compile();

    service = module.get<SaleArticleService>(SaleArticleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
