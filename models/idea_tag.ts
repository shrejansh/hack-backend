import { DataTypes } from "sequelize";
import sequelize from ".";
import { Tag } from "./tag";
import { Idea } from "./idea";

export const IdeaTag = sequelize.define('IdeaTag', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  idea_id: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  tag_id: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  }
}, {
  tableName: 'idea_tags',
});

