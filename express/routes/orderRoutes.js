const express = require("express")
const router = express.Router()


//to order
// router.post("/:id",(req,res)=>{
router.post("/",(req,res)=>{
    res.send("make your  order")
})

//to see your   order
router.get("/:id",(req,res)=>{
    let OrderId = req.params.id
    res.send(`your order page: ${OrderId}`)
})


//to delete order
router.delete("/:id",(req,res)=>{
    const id = req.params.id
    res.send(`Your order  deletd ${id}`)
})

//to upadte order page
router.put("/:id",(req,res)=>{
    const id = req.params.id
    res.send(`upadte your order ${id}`)
})

module.exports = router