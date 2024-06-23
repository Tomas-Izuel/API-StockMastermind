import { Module } from '@nestjs/common';
import { databaseProviders } from '../mysql/mysql';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseProviderModule {}
