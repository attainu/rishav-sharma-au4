const Sequelize = require ( "sequelize" );
const db = new Sequelize ( "songspk" , "postgres" , "12345" , {
host: "localhost" ,
dialect: "postgres"
});
db . authenticate ()
. then (() => {
console . log ( "DB connection is established" );
})
module . exports = db ;