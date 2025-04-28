const express = require("express")
const router = express.Router()
const db = require("../db.js")


// Category
router.get("/",(req,res)=>{
    db.query("SELECT * FROM category", (err, results)=>{
        if(err) throw err
        res.json(results)
    })
})

//to add category
router.post("/add",(req,res)=>{
    // const id = req.params.id
    const {name} = req.body
  
    const query = "INSERT INTO category (name) VALUES (?)"
    db.query(query,[name],(err, results) =>{
        if(err) throw err
        res.send("category added")
    })

})

//to  get category by id
router.get("/:id",(req,res)=>{
    const id = req.params.id
    db.query("SELECT * FROM category WHERE id=?",[id], (err, results)=>{
        if(err) throw err
        res.json(results)
    })
})

// to update category
router.put("/:id",(req,res)=>{
    const id = req.params.id
    const {name} = req.body
    const query = "UPDATE category SET name = ? WHERE id = ?"
    db.query(query, [name, id], (err,results)=>{
        if(err) throw err
        res.send(`category updated by id: ${id}`)
    })
})

//to Delete category
router.delete("/:id",(req,res)=>{
    const id = req.params.id
    const query = "DELETE FROM category WHERE id = ?"
    db.query(query,[id], (err, results)=>{
        if(err) throw err
        res.send(`category deleted ${id}`)
    })
})

module.exports = router