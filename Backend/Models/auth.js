const mongoose = require ("mongoose")
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name:{type:String, required:true},
    email:{type:String, required:true,unique:true},
    password:{type:String, required:true,unique:true},

const cartSchema = new Schema({
  totalAmount: {
    type: Number,
    default: 0,
  },
});

const userSchema = new Schema({
  name:  { type: String, required: true },
  email:  { type: String, required: true, unique: true },
  password:  { type: String, required: true },
  role: {
    type: String,
    default: 'user',
  },
  cart: {
    type: cartSchema,
    default: () => ({}),
  },
});

module.exports=mongoose.model("User",UserSchema)
