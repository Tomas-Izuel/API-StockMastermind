import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
import { Article } from 'src/article/entities/article.entity';
import { Client } from 'src/client/entities/client.entity';
import { Family } from 'src/family/entities/family.entity';
import { OrderStatus } from 'src/order-status/entities/order-status.entity';
import { ProviderArticle } from 'src/provider-article/entities/provider-article.entity';
import { Provider } from 'src/provider/entities/provider.entity';
import { SaleArticle } from 'src/sale-article/entities/sale-article.entity';
import { Sale } from 'src/sale/entities/sale.entity';

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
        Client,
        Sale,
        SaleArticle,
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
