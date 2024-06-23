import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
import { Article } from 'src/article/entities/article.entity';
import { Family } from 'src/family/entities/family.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: configService.get('MYSQLHOST'),
        port: configService.get<number>('MYSQLPORT'),
        username: configService.get('MYSQLUSER'),
        password: configService.get('MYSQLPASSWORD'),
        database: configService.get('MYSQLDATABASE'),
      });
      sequelize.addModels([Article, Family]);
      await sequelize.sync();
      return sequelize;
    },
    inject: [ConfigService],
  },
];
