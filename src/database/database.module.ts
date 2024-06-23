import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/mysql/mysql';

@Module({ providers: [...databaseProviders], exports: [...databaseProviders] })
export class DatabaseModule {}
