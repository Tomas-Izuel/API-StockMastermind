import { Test, TestingModule } from '@nestjs/testing';
import { ProviderArticleService } from './provider-article.service';

describe('ProviderArticleService', () => {
  let service: ProviderArticleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProviderArticleService],
    }).compile();

    service = module.get<ProviderArticleService>(ProviderArticleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
