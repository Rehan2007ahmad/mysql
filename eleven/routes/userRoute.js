const express = require("express")
const mysql = require("../db.js")
const router = express.Router()

router.use(express.json())

router.get("/", (req,res)=>{
    // res.send("users")
    mysql.query("SELECT * FROM users", (err, results)=>{
        res.send(results)
    })
})

router.post("/add", (req,res)=>{
    const {name} = req.body
     query ="INSERT INTO users(name) VALUES(?)"
     mysql.query(query, [name], (err, results)=>{
        if(err) throw err
        res.send(`user added ${req.name} `)
    })
})

router.delete("/:id",(req,res)=>{
    const {id} = req.params
    query ="DELETE FROM users WHERE id =? "
    mysql.query(query, [id], (err, results)=>{
        if(err) throw err
        res.send(  `user deletd by id :${id}`)
    })
})
module.exports = router