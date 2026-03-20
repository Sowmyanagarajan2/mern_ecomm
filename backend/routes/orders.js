import express from "express"
import Order from "../models/Order.js"

const router = express.Router()

router.get("/", async(req,res)=>{
 const data = await Order.find()
 res.json(data)
})

router.post("/", async(req,res)=>{
 const o = new Order(req.body)
 await o.save()
 res.json(o)
})

router.delete("/:id", async(req,res)=>{
 await Order.findByIdAndDelete(req.params.id)
 res.json({msg:"deleted"})
})

export default router