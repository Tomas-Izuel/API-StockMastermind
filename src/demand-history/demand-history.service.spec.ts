import { Test, TestingModule } from '@nestjs/testing';
import { DemandHistoryService } from './demand-history.service';

describe('DemandHistoryService', () => {
  let service: DemandHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemandHistoryService],
    }).compile();

    service = module.get<DemandHistoryService>(DemandHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
