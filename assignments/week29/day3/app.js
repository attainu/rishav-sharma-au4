const express = require ( "express" );
const cor = require('cors');
const app = express ();
const db = require ( "./database" );
app . use ( express . json ());

app.use(cor())
const Songs = require ( "./Models/Songs" );
app.post ( "/songs" , async ( req , res ) => {
try {
const { body } = req ;
let songs = await Songs . create ({songname: body . songname, songlength: body . songlength,songreleaseyear: body . songreleaseyear, songaward: body . songaward, songmoviename: body . songmoviename, songgenre: body . songgenre, songlanguage: body . songlanguage});
res . send ( songs );
} catch ( error ) {
console . log ( error );
}
});
app . get ( "/songs" , async ( req , res ) => {
try {

let songs = await Songs . findAll ();
res . send ( songs );
} catch ( error ) {
console . log ( error );
}
});
app . put ( "/songs/:id" , async ( req , res ) => {
try {
const { body , params } = req ;

let songs = await Songs . update ({songname: body . songname, songlength: body . songlength,songreleaseyear: body . songreleaseyear, songaward: body . songaward, songmoviename: body . songmoviename, songgenre: body . songgenre, songlanguage: body . songlanguage}, {
where: { id: params . id } });
res . send ( songs );
} catch ( error ) {
console . log ( error );
}
});
app . delete ( "/songs/:id" , async ( req , res ) => {
    try {
    const { params } = req ;
    await Songs . destroy ({ where: { id: params . id } });
    res . send ( "Deleted successfully" );
    } catch ( error ) {
    console . log ( error );
    }
    })