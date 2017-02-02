'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserMovies = sequelize.define('UserMovies', {
    user_id: DataTypes.INTEGER,
    movie_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UserMovies;
};