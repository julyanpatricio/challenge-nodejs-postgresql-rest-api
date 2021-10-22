const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('actor', {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
        min:0
      }
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdWVP49PsB6DzTXzKJYRUxNQRrFWmy-_mYlg&usqp=CAU'
    }
  });

};
