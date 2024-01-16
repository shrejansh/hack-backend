import { DataTypes } from "sequelize";
import sequelize from ".";

export const UserIdea = sequelize.define('UserIdea', {
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
  idea_id: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  upvoted: {
    type: DataTypes.BOOLEAN,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  }
}, {
  tableName: 'user_ideas'
});
