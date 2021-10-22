const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('season', {
    season_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        min:1
      }
    },
    year: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
        min:1900
      }
    },
  },{timestamps: false});

};
