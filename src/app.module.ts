import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { FamilyModule } from './family/family.module';
import { DatabaseModule } from './database/database.module';
import configuration from './config/configuration';
import { databaseProviders } from './config/mysql/mysql';
import { ClientModule } from './client/client.module';
import { SaleModule } from './sale/sale.module';
import { SaleArticleModule } from './sale-article/sale-article.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    FamilyModule,
    ArticleModule,
    DatabaseModule,
    ClientModule,
    SaleModule,
    SaleArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService, ...databaseProviders],
})
export class AppModule {}
