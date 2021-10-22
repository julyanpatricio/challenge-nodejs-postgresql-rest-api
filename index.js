const server = require('./src/app.js');
const { preloadDb } = require('./src/controllers/preloadDb.js');
const { conn } = require('./src/db.js');

conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('listening at 3001');
    preloadDb()
  });
});


