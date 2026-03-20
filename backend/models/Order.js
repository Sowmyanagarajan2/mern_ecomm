import mongoose from "mongoose"

const schema = new mongoose.Schema({
 items:Array,
 total:Number
})

export default mongoose.model("Order", schema)