import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
import { Article } from 'src/article/entities/article.entity';
import { Family } from 'src/family/entities/family.entity';
import { OrderStatus } from 'src/order-status/entities/order-status.entity';
import { ProviderArticle } from 'src/provider-article/entities/provider-article.entity';
import { Provider } from 'src/provider/entities/provider.entity';

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
      sequelize.addModels([
        Article,
        Family,
        OrderStatus,
        Provider,
        ProviderArticle,
      ]);
      await sequelize.sync();
      return sequelize;
    },
    inject: [ConfigService],
  },
];
