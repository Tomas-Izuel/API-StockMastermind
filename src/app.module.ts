import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { FamilyModule } from './family/family.module';
import { DatabaseModule } from './database/database.module';
import configuration from './config/configuration';
import { ProviderModule } from './provider/provider.module';
import { OrderStatusModule } from './order-status/order-status.module';
import { databaseProviders } from './config/mysql/mysql';
import { ProviderArticleModule } from './provider-article/provider-article.module';
import { ClientModule } from './client/client.module';
import { SaleModule } from './sale/sale.module';
<<<<<<< HEAD
import { OrderModule } from './order/order.module';

=======
import { DemandParamsModule } from './demand-param/demand-params.module';
>>>>>>> develop
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    FamilyModule,
    ArticleModule,
    DatabaseModule,
    ProviderModule,
    OrderStatusModule,
    ProviderArticleModule,
    ClientModule,
    SaleModule,
<<<<<<< HEAD
    OrderModule,
=======
    DemandParamsModule
>>>>>>> develop
  ],
  controllers: [AppController],
  providers: [AppService, ...databaseProviders],
})
export class AppModule {}
