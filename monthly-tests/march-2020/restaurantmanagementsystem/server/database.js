// const { Pool } = require("pg");

// const db = new Pool({
//     user:"postgres",
//     host:"localhost",
//     port:"5432",
//     database:"resturant",
//     password:"12345"
// });

// module.exports = db;
const Sequelize = require ( "sequelize" );
const db = new Sequelize ( "resturant" , "postgres" , "12345" , {
host: "localhost" ,
dialect: "postgres"
});
db . authenticate ()
. then (() => {
console . log ( "DB connection is established" );
})
module . exports = db ;