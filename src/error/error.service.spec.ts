import { Test, TestingModule } from '@nestjs/testing';
import { ErrorCalculationService } from './error.service';

describe('ErrorService', () => {
  let service: ErrorCalculationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ErrorCalculationService],
    }).compile();

    service = module.get<ErrorCalculationService>(ErrorCalculationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
