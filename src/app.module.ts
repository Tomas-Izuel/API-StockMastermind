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
<<<<<<< HEAD
import { ProviderArticleService } from './provider-article/provider-article.service';
import { ProviderArticleModule } from './provider-article/provider-article.module';
=======
import { ClientModule } from './client/client.module';
import { SaleModule } from './sale/sale.module';
>>>>>>> develop

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    FamilyModule,
    ArticleModule,
    DatabaseModule,
<<<<<<< HEAD
    ProviderModule,
    OrderStatusModule,
    ProviderArticleModule,
=======
    ClientModule,
    SaleModule,
>>>>>>> develop
  ],
  controllers: [AppController],
  providers: [AppService, ...databaseProviders],
})
export class AppModule {}
