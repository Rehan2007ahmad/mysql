const express = require("express")
const productRoutes = require("./routes/productRoutes")
const categoryRoutes = require("./routes/categoryRoutes")
const userRoutes = require("./routes/userRoutes")
const orderRoutes = require("./routes/orderRoutes")
const db = require("./db.js")
const app = express()
const port = 3000


app.use(express.json())
app.use("/product", productRoutes)
app.use("/category", categoryRoutes)
app.use("/user", userRoutes)
app.use("/order", orderRoutes)

//home
app.get("/",(req,res)=>{
    res.send("hello world")
})

//about
app.get("/about",(req,res)=>{
    res.send("About Us")
})

//contact
app.get("/contact",(req,res)=>{
    res.send("contact Us")
})


//for search with query
app.get("/search/", (req, res) => {
    let category = req.query.category;
    let product = req.query.product;

    res.send(`Your searched category is "${category}" and product is "${product}"`);
});



app.use((req,res)=>{
    res.status(404).send("404 Page Not Found")
})

app.listen(port, ()=>{
    console.log(`server is running on http://localhost${port}`)
})