const db = require ( "../database" );
const Sequelize = require ( "sequelize" );
let Awards = db . define ( "Awards" , {

songaward: {
    type: Sequelize . INTEGER
},
}, {
timestamps: false
});
db . sync (). then ( res => {
})
module . exports = Awards ;