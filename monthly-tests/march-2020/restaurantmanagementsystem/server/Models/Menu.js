const db = require ( "../database" );
const Sequelize = require ( "sequelize" );
let Menu = db . define ( "menu" , {
itemname: {
type: Sequelize . STRING
},
cuisinename: {
type: Sequelize . STRING
},
choosevegornon: {
type: Sequelize . STRING
},
itemprice: {
type: Sequelize . INTEGER
},
}, {
timestamps: false
});
db . sync (). then ( res => {
})
module . exports = Menu ;
