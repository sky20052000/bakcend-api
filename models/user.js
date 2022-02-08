const mongoose = require("mongoose");

// Create Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },

  
  password: {
    type: String,
     required:true,
  },

 
   
  Dob:{
    type:String,
  },

  country_code:{
    type:String,
  },
  phone:{
    type:Number,
  },
 
  date: {
    type: Date,
    default: Date.now
  }
});
 
// creating collection
const User = new mongoose.model("User", userSchema);

module.exports = User;