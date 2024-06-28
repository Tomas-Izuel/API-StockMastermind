import { Test, TestingModule } from '@nestjs/testing';
import { DemandHistoryController } from './demand-history.controller';
import { DemandHistoryService } from './demand-history.service';

describe('DemandHistoryController', () => {
  let controller: DemandHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemandHistoryController],
      providers: [DemandHistoryService],
    }).compile();

    controller = module.get<DemandHistoryController>(DemandHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
