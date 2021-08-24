const knex = require('knex')({
  client: 'pg',
  connection: {
    //host runs in 192.168 ..
    host: process.env.PG_HOST,
    user: 'postgres',
    password: 'postgres',
    database: 'Mydb',
    //port runs in 5432
    port: process.env.PORT
  },
  pool: { min: 0, max: 7 }
});

module.exports = knex