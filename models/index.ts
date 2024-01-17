import { Sequelize } from 'sequelize';

const db_uri = process.env.DB_URI;
const sequelize = new Sequelize(db_uri, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: false,
      rejectUnauthorized: false
    }
  }, //removed ssl
});

export default sequelize;