const db = require ( "../database" );
const Sequelize = require ( "sequelize" );
let Waiters = db . define ( "waiters" , {

waitername: {
type: Sequelize . STRING
},
waiterage: {
type: Sequelize . INTEGER
},
waitermobile: {
type: Sequelize . INTEGER
},
waiterratings: {
type: Sequelize . INTEGER
},
waiterexperience: {
type: Sequelize . INTEGER
},
}, {
timestamps: false
});
db . sync (). then ( res => {
})
module . exports = Waiters;

