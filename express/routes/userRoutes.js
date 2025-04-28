const express = require("express")
const router = express.Router()
const db = require("../db.js")



//to login user
router.post("/",(req,res)=>{
    const {username, password} = req.body
    const query = "INSERT INTO users (username, password) VALUES (?,?)"
    db.query(query, [username, password], (err, results)=>{
        if(err) throw err
        res.send(`user logged in successfully ${username}`)
    })
})


// to see  user
router.get("/:id",(req,res)=>{
    const id = req.params.id
    const query ="SELECT * FROM users WHERE id=?"
    db.query(query, [id], (err, results)=>{
        if(err) throw err
        res.json(results)
    })

})


//to update users data
router.put("/:id",(req,res)=>{
    const id = req.params.id  
    const {username, password} = req.body
    const query = "UPDATE users SET username = ?, password= ? WHERE id = ?"
    db.query(query, [username, password, id], (err, results)=>{
        if(err) throw err
        res.send(`user updated by id ${id}, ${username}`)
    })
})

//to delete Users
router.delete("/:id",(req,res)=>{
    const id = req.params.id
    const query = "DELETE FROM users WHERE id = ?"
    db.query(query, [id], (err, results)=>{
        if(err) throw err
        res.send(`user deleted by id`)
    })
})


module.exports = router