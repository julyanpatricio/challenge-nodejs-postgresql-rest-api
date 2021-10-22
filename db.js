require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

const basename = path.basename(__filename);

const modelDefiners = [];

// read files in dir /models and push in modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Inject conection to models
modelDefiners.forEach(model => model(sequelize));

// change first letter to uppercase
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
// add models to sequelize
sequelize.models = Object.fromEntries(capsEntries);


// to make relationships, we deconstruct the models
const { Actor, Director, Episode, Film, Season, Serie } = sequelize.models;

// Relationshps
Actor.belongsToMany(Film, { through: 'actor_film', timestamps: false });
Film.belongsToMany(Actor, { through: 'actor_film', timestamps: false });

Actor.belongsToMany(Episode, { through: 'actor_episode', timestamps: false });
Episode.belongsToMany(Actor, { through: 'actor_episode', timestamps: false });

Director.hasMany(Film)
Film.belongsTo(Director)

Director.hasMany(Episode)
Episode.belongsTo(Director)

Season.hasMany(Episode)
Episode.belongsTo(Season)

Serie.hasMany(Season)
Season.belongsTo(Serie)

module.exports = {
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
  Actor, Director, Episode, Film, Season, Serie
};
