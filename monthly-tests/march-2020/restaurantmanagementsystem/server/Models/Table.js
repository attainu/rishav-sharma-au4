const db = require ( "../database" );
const Sequelize = require ( "sequelize" );
let Table = db . define ( "table" , {
strength: {
type: Sequelize . INTEGER
},
name: {
type: Sequelize . STRING
},
floor: {
type: Sequelize . INTEGER
},
}, {
timestamps: false
});
db . sync (). then ( res => {
})
module . exports = Table ;