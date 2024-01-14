import { Sequelize } from 'sequelize';

const db_uri = process.env.DB_URI || 'postgres://hack_db_instance_user:YYwB3Ou4BE3gqXq4Y4CGxNuACrhRxEvn@dpg-cmguvmnqd2ns73fmtffg-a.singapore-postgres.render.com/hack_db_instance'
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