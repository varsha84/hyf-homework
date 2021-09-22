/* require("dotenv").config();

// create connection
const knex = require("knex")({
  client: "mysql2",
  connection:{
    host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
  },
  pool: {min:0, max:7},
  });
    // Check that the connection works
    knex.raw("SELECT VERSION()").then(() => {
      console.log(`connection to knex was successful!`);
    }).
    catch((e) => {
      console.log("connection unsuccessful " + e)
    });
  
  
  module.exports = knex; */
 

  require("dotenv").config();
  const knex = require("knex")
  const config = require("../../knexfile")
  
  // create connection
  let db;
  if (process.env.NODE_ENV === "test") {
    db = knex(config.test)
  } else {
    db = knex(config.development)
    // Check that the connection works
    db.raw("SELECT VERSION()").then(() => {
      console.log(`connection to knex was successful!`);
    });
  }
  
  module.exports = db;