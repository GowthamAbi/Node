const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type:String,
    enum:["User","Admin"],
    default:"User",
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
  postDate: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("User", userSchema, "Users");
