const db = require ( "../database" );
const Sequelize = require ( "sequelize" );
let Order = db . define ( "order" , {
name: {
type: Sequelize . STRING
},
mobile: {
type: Sequelize . INTEGER
},
}, {
timestamps: false
});
db . sync (). then ( res => {
})
module . exports = Order ;