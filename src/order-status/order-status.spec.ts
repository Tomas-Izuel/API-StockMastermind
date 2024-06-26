import { Test, TestingModule } from '@nestjs/testing';
import { OrderStatus } from './order-status';

describe('OrderStatus', () => {
  let provider: OrderStatus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderStatus],
    }).compile();

    provider = module.get<OrderStatus>(OrderStatus);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
