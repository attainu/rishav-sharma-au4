const db = require ( "../database" );
const Sequelize = require ( "sequelize" );
let Songs = db . define ( "songs" , {

songname: {
type: Sequelize . STRING
},
songlength: {
type: Sequelize . INTEGER
},
songreleaseyear: {
    type: Sequelize . INTEGER
},
songaward: {
    type: Sequelize . STRING
},
songmoviename: {
    type: Sequelize . STRING
},
songgenre: {
    type: Sequelize . STRING
},
songlanguage: {
    type: Sequelize . STRING
},
}, {
timestamps: false
});
db . sync (). then ( res => {
})
module . exports = Songs ;