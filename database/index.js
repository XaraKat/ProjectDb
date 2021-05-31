const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'lamda',
    database: 'postgres',
    port: 5432
  },
  pool: { min: 0, max: 7 }
});

module.exports = knex