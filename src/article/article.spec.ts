import { Test, TestingModule } from '@nestjs/testing';
import { Article } from './article';

describe('Article', () => {
  let provider: Article;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Article],
    }).compile();

    provider = module.get<Article>(Article);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
