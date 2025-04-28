const mysql = require("mysql2")

const con = mysql.createConnection({
    // host:"localhost",
    // user:"root",
    // password:"",
    // database:"eleven"

    host: "in1.fcomet.com",
    user:"sangalot_studentdemo",
    password:"studentdemo@345",
    database:"sangalot_student"
})


con.connect((err, results)=>{
    if(err) throw err
    console.log("databse connected")
})


module.exports = con