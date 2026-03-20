import express from "express"
import Product from "../models/Product.js"

const router = express.Router()

router.get("/", async(req,res)=>{
 const data = await Product.find()
 res.json(data)
})

router.get("/:id", async(req,res)=>{
 const data = await Product.findById(req.params.id)
 res.json(data)
})

router.post("/", async(req,res)=>{
 const p = new Product(req.body)
 await p.save()
 res.json(p)
})

router.put("/:id", async(req,res)=>{
 const p = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
 res.json(p)
})

router.delete("/:id", async(req,res)=>{
 await Product.findByIdAndDelete(req.params.id)
 res.json({msg:"deleted"})
})

export default router