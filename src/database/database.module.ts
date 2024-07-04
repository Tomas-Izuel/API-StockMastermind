import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/config/mysql/mysql';

// En este archivo se definen los módulos de la aplicación.

@Module({ providers: [...databaseProviders], exports: [...databaseProviders] })
export class DatabaseModule {}
