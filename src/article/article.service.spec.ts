import { Test, TestingModule } from '@nestjs/testing';
import { ArticleService } from './article.service';

// En este archivo se importan las dependencias necesarias para realizar las pruebas unitarias.

describe('ArticleService', () => {
  let service: ArticleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticleService],
    }).compile();

    service = module.get<ArticleService>(ArticleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
