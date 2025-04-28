const mysql = require("mysql2")

const db = mysql.createConnection({
    // host: "in1.fcomet.com",
    // user:"sangalot_studentdemo",
    // password:"studentdemo@345",
    // database:"sangalot_student"

    host: "localhost",
    user:"root",
    password:"",
    database:"shop"
})

db.connect(err=>{
    if(err) throw err
    console.log("Database connected")
})

module.exports = db