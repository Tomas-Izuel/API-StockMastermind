import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/config/mysql/mysql';

@Module({ providers: [...databaseProviders], exports: [...databaseProviders] })
export class DatabaseModule {}
