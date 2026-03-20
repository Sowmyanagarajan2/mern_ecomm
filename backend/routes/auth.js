import express from "express"
import jwt from "jsonwebtoken"

const router = express.Router()

router.post("/login",(req,res)=>{

 const {email,password} = req.body

 if(email==="admin" && password==="123"){
  const token = jwt.sign({role:"admin"},"secret")
  return res.json({token})
 }

 res.status(401).json({msg:"Invalid"})
})

export default router