import { Test, TestingModule } from '@nestjs/testing';
import { Family } from './family-repository';

describe('Family', () => {
  let provider: Family;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Family],
    }).compile();

    provider = module.get<Family>(Family);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
