import { Test, TestingModule } from '@nestjs/testing';
import { DemandParamsController } from './demand-params.controller';
import { DemandParamsService } from './demand-params.service';

describe('DemandParamsController', () => {
  let controller: DemandParamsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemandParamsController],
      providers: [DemandParamsService],
    }).compile();

    controller = module.get<DemandParamsController>(DemandParamsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
