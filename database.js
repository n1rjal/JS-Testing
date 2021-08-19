const { Client } = require("pg");

const client = new Client({
  user: "nirjal",
  database: "testdb",
  password: "test12345",
  port: 5432,
  host: "localhost",
});

client.connect();

module.exports = { client };
