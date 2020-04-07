const db = require ( "../database" );
const Sequelize = require ( "sequelize" );
let Movies = db . define ( "Movies" , {

songmoviename: {
    type: Sequelize . INTEGER
},
}, {
timestamps: false
});
db . sync (). then ( res => {
})
module . exports = Movies ;