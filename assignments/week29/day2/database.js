const { Pool } = require("pg");

const db = new Pool({
    user:"postgres",
    host:"localhost",
    port:"5432",
    database:"resturant",
    password:"12345"
});

module.exports = db;