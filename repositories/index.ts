import {Sequelize, DataTypes} from 'sequelize';
import pg from 'pg';
import 'dotenv/config';

const db_uri = process.env.DB_URI;
const sequelize = new Sequelize(db_uri, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: false
    }
  }, //removed ssl
})
