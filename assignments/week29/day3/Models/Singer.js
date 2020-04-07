const db = require ( "../database" );
const Sequelize = require ( "sequelize" );
let Singer = db . define ( "Singer" , {

singerage: {
    type: Sequelize . INTEGER
},
singeraward: {
    type: Sequelize . STRING
},
singernativelanguage: {
    type: Sequelize . STRING
},
Issingerclassicallytrained: {
    type: Sequelize . STRING
},
singergender: {
    type: Sequelize . STRING
},
}, {
timestamps: false
});
db . sync (). then ( res => {
})
module . exports = Singer ;