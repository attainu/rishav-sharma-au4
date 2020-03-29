const express = require ( "express" );
const cor = require('cors');
const app = express ();
const db = require ( "./database" );
app . use ( express . json ());

app.use(cor())
const Table = require ( "./Models/Table" );
app . post ( "/table" , async ( req , res ) => {
try {
const { body } = req ;
let table = await Table . create ({ strength: body . strength , name: body . name,floor: body . floor });
res . send ( table );
} catch ( error ) {
console . log ( error );
}
});
app . get ( "/table" , async ( req , res ) => {
try {

let tables = await Table . findAll ();
res . send ( tables );
} catch ( error ) {
console . log ( error );
}
});
app . put ( "/table/:id" , async ( req , res ) => {
try {
const { body , params } = req ;

let table = await Table . update ({ name: body . name , strength: body . strength ,floor: body . floor}, {
where: { id: params . id } });
res . send ( table );
} catch ( error ) {
console . log ( error );
}
});
app . delete ( "/table/:id" , async ( req , res ) => {
    try {
    const { params } = req ;
    await Table . destroy ({ where: { id: params . id } });
    res . send ( "Deleted successfully" );
    } catch ( error ) {
    console . log ( error );
    }
    })


const Waiters = require ( "./Models/Waiters" );
app . post ( "/waiters" , async ( req , res ) => {
try {
const { body } = req ;
let waiters = await Waiters . create ({ waitername: body . waitername , waiterage: body . waiterage, waitermobile: body . waitermobile , waiterage: body . waiterage, waiterratings: body . waiterratings,waiterexperience: body . waiterexperience});
res . send ( waiters );
} catch ( error ) {
console . log ( error );
}
});
app . get ( "/waiters" , async ( req , res ) => {
    try {
    
    let waiters = await Waiters . findAll ();
    res . send ( waiters );
    } catch ( error ) {
    console . log ( error );
    }
    });


module . exports = app ;
