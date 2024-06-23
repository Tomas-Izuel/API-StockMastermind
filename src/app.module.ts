import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { FamilyModule } from './family/family.module';
import { DatabaseModule } from './database/database.module';
import configuration from './config/configuration';
import { databaseProviders } from './mysql/mysql';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    FamilyModule,
    ArticleModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService, ...databaseProviders],
})
export class AppModule {}
