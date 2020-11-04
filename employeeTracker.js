const mysql = require("mysql");
const inquirer = require("inquirer");


const connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "",
    database: "employees_DB"
});


connection.connect(function (err) {
    if (err) throw err;
    start();
});


function start() {
    inquirer
        .prompt({
            name: "addViewUpdate",
            type: "list",
            messgae: "Would you like to add, update, or view?",
            choices: ["ADD", "UPDATE", "VIEW", "EXIT"]
        })
        .then(function (answer) {
            if (answer.addViewUpdate === "ADD") {
                add();
            }
            else if (answer.addViewUpdate === "UPDATE") {
                update();
            }
            else if (answer.addViewUpdate === "VIEW") {
                view();
            }
            else {
                connection.end();
            }
        })
}
// Add departments, roles, employees
function add() {

}
// Update employee roles
function update() {

}
// View departments, roles, employees
function view() {

}