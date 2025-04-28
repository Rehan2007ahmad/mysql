const express = require("express")
const db = require("../db.js")
const router = express.Router()

//to see all product
router.get("/", (req,res)=>{
    // res.send("This is Product Page")
    db.query("SELECT * FROM products", (err, results)=>{
        if(err) throw err
        res.json(results)
    })
})

// to add product
router.post("/add",(req,res)=>{
    const {category_name, title, price, description, image} = req.body

    const query = "INSERT INTO products (category_name, title, price, description, image) VALUES(?,?,?,?,?)"

    db.query(query, [category_name, title, price, description, image], (err,  results)=>{
        if(err) throw err
        res.send("product added successfully")
    })
})

//to display product by id
router.get("/:id",(req,res)=>{
    const id = req.params.id
    db.query("SELECT * FROM products WHERE id=?",[id], (err, results)=>{
        if(err) throw err
        res.json(results)
    })
})


// to update product
router.put("/:id", (req, res) => {
    const id = req.params.id;
    const { title, category_name, description, price, image } = req.body;
    const query = "UPDATE products SET title = ?, category_name = ?, description = ?, price = ?, image = ? WHERE id = ?";
    db.query(query, [title, category_name, description, price, image, id], (err, results) => {
        if (err) throw err;
        res.send({ message: "Product updated", title: title });
    });
});


//to Delete product
router.delete("/:id",(req,res)=>{
    const id = req.params.id
    const query = "DELETE FROM products WHERE id = ?"
    db.query(query, [id], (err, results)=>{
        if(err) throw err
        res.send(`product deleted by id :${id}`)
    })

})

module.exports = router