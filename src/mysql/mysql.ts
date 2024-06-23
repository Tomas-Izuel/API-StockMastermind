import { Sequelize } from 'sequelize-typescript';
import config from 'src/config/config';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: config.DIALECT as 'mysql',
        host: config.MYSQLHOST,
        port: config.MYSQLPORT,
        username: config.MYSQLUSER,
        password: config.MYSQLPASSWORD,
        database: config.MYSQLDATABASE,
      });
      await sequelize.sync();
      return sequelize;
    },
  },
];
