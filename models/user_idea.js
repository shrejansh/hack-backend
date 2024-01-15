'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_idea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_idea.init({
    user_id: DataTypes.NUMBER,
    idea_id: DataTypes.NUMBER,
    upvoted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'user_idea',
  });
  return user_idea;
};