const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('serie', {
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
    year: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
        min:1900
      }
    },
    number_seasons: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
        min:0
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
      defaultValue: 'https://png.pngtree.com/png-clipart/20210619/ourlarge/pngtree-family-kids-watching-tv-series-illustration-png-image_3467842.jpg'
    }
  },{timestamps: false});

};
