import { Sequelize, DataTypes } from 'sequelize';

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

export const User = sequelize.define('User', {
  // Model attributes are defined here
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  employee_id: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  }
}, {
  tableName: 'users'
});

console.log(User === sequelize.models.User); // true