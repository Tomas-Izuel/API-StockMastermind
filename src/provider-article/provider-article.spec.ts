import { Test, TestingModule } from '@nestjs/testing';
import { ProviderArticle } from './provider-article';

describe('ProviderArticle', () => {
  let provider: ProviderArticle;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProviderArticle],
    }).compile();

    provider = module.get<ProviderArticle>(ProviderArticle);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
