const { Pool } = require("pg");
require("dotenv").config();

const client = new Pool({
  host: process.env.DB_Host,
  user: process.env.DB_User,
  port: process.env.DB_Port,
  password: process.env.DB_Password,
  database: process.env.DB_Database,
});

client.connect();

module.exports = client;
