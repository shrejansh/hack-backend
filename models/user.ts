import { Sequelize, DataTypes } from 'sequelize';

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
  // Other model options go here
  tableName: 'users'
});

// (async () => {
//     await sequelize.sync({ force: true });
//     // Code here
//   })();

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true