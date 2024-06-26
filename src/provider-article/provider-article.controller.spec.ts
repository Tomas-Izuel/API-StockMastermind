import { Test, TestingModule } from '@nestjs/testing';
import { ProviderArticleController } from './provider-article.controller';
import { ProviderArticleService } from './provider-article.service';

describe('ProviderArticleController', () => {
  let controller: ProviderArticleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProviderArticleController],
      providers: [ProviderArticleService],
    }).compile();

    controller = module.get<ProviderArticleController>(ProviderArticleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
