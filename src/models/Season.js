const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('season', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    season_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        min: 1
      }
    },
    description: {
      type: DataTypes.TEXT,
    },
    year: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
        min: 1900
      }
    },
  }, { timestamps: false });

};
