const db = require("../database");
const Sequelize = require("sequelize");
const Department = require('./Department');

let Employee = db.define("employee", {
    
 employeeName: {
   type: Sequelize.STRING
 }
}, {
 timestamps: false
});

db.sync().then(res => {
})

Employee.belongsTo(Department, { foreignKey: 'departmentid' });

module.exports = Employee;
