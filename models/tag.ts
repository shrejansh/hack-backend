import { DataTypes } from "sequelize";
import sequelize from ".";

export const Tag = sequelize.define('Tag', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  }
}, {
  tableName: 'tags'
});
