import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { OrderStatusModule } from './order-status/order-status.module';

@Module({
  imports: [ConfigModule.forRoot(), OrderStatusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
