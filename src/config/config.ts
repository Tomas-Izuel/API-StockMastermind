const config = {
  MYSQLDATABASE: process.env.MYSQLDATABASE,
  MYSQLHOST: process.env.MYSQLHOST,
  MYSQLPASSWORD: process.env.MYSQLPASSWORD,
  MYSQLPORT: Number(process.env.MYSQLPORT),
  MYSQLUSER: process.env.MYSQLUSER,
  MYSQL_DATABASE: process.env.MYSQL_DATABASE,
  MYSQL_PRIVATE_URL: process.env.MYSQL_PRIVATE_URL,
  MYSQL_ROOT_PASSWORD: process.env.MYSQL_ROOT_PASSWORD,
  MYSQL_URL: process.env.MYSQL_URL,
  PORT: process.env.PORT,
  DIALECT: process.env.DIALECT,
};

export default config;
