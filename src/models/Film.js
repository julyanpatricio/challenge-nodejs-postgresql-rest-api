const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('film', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      unique:true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
        min:1900
      }
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
      defaultValue: 'https://www.rcinet.ca/eye-on-the-arctic/wp-content/uploads/sites/30/2014/07/iStock_000008658353Small.jpg'
    }
  },{timestamps: false});

};
