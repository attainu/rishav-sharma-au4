// const express = require("express");
// const app = express();
// const db = require("./database");

// app.use(express.json());

// app.post("/waiter", async (req, res) => {
//     try{
//         const { body } = req;
//        await db.query("CREATE TABLE if not exists waiters (id integer primary key, name varchar(30),email varchar(100), mobile int)");
//     }
//     catch (error){

//     console.log(error);
//     }
// })

// module.exports = app;

const express = require ( "express" );
const app = express ();
const db = require ( "./database" );
app . use ( express . json ());
app . post ( "/waiter" , async ( req , res ) => {
try {
const { body } = req ;
await db . query ( "CREATE table if not exists waiters( id serial primary key, name varchar(30), email varchar(100), mobile int)" );
const waiter = await db . query ( "INSERT into waiters (name, email, mobile) values($1, $2, $3) returning *" , [ body . name , body . email , body . mobile ]);
console . log ( "waiter" , waiter );
res . send ( waiter . rows [ 0 ]);
} catch ( error ) {
console . log ( error );
}
});
module . exports = app ;