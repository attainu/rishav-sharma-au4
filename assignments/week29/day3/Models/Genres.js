const db = require ( "../database" );
const Sequelize = require ( "sequelize" );
let Genres = db . define ( "Genres" , {

songgenres: {
    type: Sequelize . INTEGER
},
}, {
timestamps: false
});
db . sync (). then ( res => {
})
module . exports = Genres ;