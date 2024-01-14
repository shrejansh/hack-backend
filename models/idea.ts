import { DataTypes } from "sequelize";
import sequelize from ".";

export const Idea = sequelize.define('Idea', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  upvotes: {
    type: DataTypes.NUMBER,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  }
}, {
  tableName: 'ideas'
});
