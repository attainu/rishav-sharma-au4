const db = require("../database");
const Sequelize = require("sequelize");

let Department = db.define("department", {
    
 departmentName: {
   type: Sequelize.STRING
 }
}, {
 timestamps: false
});

db.sync().then(res => {
})

module.exports = Department;
