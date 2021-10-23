const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('episode', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      unique:true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      unique:true,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    released_date: {
      type: DataTypes.DATEONLY
    },
    rating: {
      type: DataTypes.FLOAT,
      validate: {
        isNumeric: true,
        min:0,
        max:5
      }
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: null
    }
  },{timestamps: false});

};
