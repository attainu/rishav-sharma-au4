const express = require("express");
const app = express();

app.use(express.json());

const Employee = require("./Models/Employee");
const Department = require("./Models/Department");

//for Employee
app.post("/employee", async (req, res) => {
  try {
    const { body } = req;
    let employee = await Employee.create({ employeeName: body.employeeName });
    res.send(employee);
  } catch (error) {
    console.log(error);
  }
 });
 
 app.get("/employee", async (req, res) => {
  try {
    let employees = await Employee.findAll();
    res.send(employees);
  } catch (error) {
    console.log(error);
  }
 });
 
 app.put("/employee/:id", async (req, res) => {
  try {
    const { body, params } = req;
    let employee = await Employee.update({ employeeName: body.employeeName }, { where: { id: params.id } });
    res.send(employee);
  } catch (error) {
    console.log(error);
  }
 });
 
 app.delete("/employee/:id", async (req, res) => {
  try {
    const { params } = req;
    await Employee.destroy({ where: { id: params.id } });
    res.send("Deleted successfully");
  } catch (error) {
    console.log(error);
  }
 })

//for Department
app.post("/department", async (req, res) => {
  try {
    const { body } = req;
    let department = await Department.create({ departmentName: body.departmentName });
    res.send(department);
  } catch (error) {
    console.log(error);
  }
 });
 
 app.get("/department", async (req, res) => {
  try {
    let departments = await Department.findAll();
    res.send(departments);
  } catch (error) {
    console.log(error);
  }
 });
 
 app.put("/department/:id", async (req, res) => {
  try {
    const { body, params } = req;
    let department = await Department.update({ departmentName: body.departmentName }, { where: { id: params.id } });
    res.send(department);
  } catch (error) {
    console.log(error);
  }
 });
 
 app.delete("/department/:id", async (req, res) => {
  try {
    const { params } = req;
    await Department.destroy({ where: { id: params.id } });
    res.send("Deleted successfully");
  } catch (error) {
    console.log(error);
  }
 })

module.exports = app;