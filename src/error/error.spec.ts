import { Test, TestingModule } from '@nestjs/testing';
import { Error } from './error';

describe('Error', () => {
  let provider: Error;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Error],
    }).compile();

    provider = module.get<Error>(Error);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
