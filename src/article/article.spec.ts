import { Test, TestingModule } from '@nestjs/testing';
import { ArticleRepository } from './article-repository';

// En este archivo se importan las dependencias necesarias para realizar las pruebas unitarias.

describe('ArticleRepository', () => {
  let provider: ArticleRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticleRepository],
    }).compile();

    provider = module.get<ArticleRepository>(ArticleRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
