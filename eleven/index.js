const express = require("express")
const userRoute = require("./routes/userRoute")
const app = express()

app.use("/user", userRoute )
app.use(express.json())

app.get("/", (req,res)=>{
    res.send("hello world")
})

app.listen(3000, ()=>{
    console.log("server is running on")
})