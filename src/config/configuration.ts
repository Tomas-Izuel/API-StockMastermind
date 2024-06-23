export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  MYSQLDATABASE: process.env.MYSQL_DATABASE,
  MYSQLHOST: process.env.MYSQLHOST,
  MYSQLPORT: parseInt(process.env.MYSQLPORT, 10) || 5432,
  MYSQLUSER: process.env.MYSQLUSER,
  MYSQLPASSWORD: process.env.MYSQLPASSWORD,
  MYSQL_DATABASE: process.env.MYSQL_DATABASE,
  MYSQL_PRIVATE_URL: process.env.MYSQL_PRIVATE_URL,
  MYSQL_ROOT_PASSWORD: process.env.MYSQL_ROOT_PASSWORD,
  MYSQL_URL: process.env.MYSQL_URL,
});
