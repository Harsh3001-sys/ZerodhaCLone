const {model} = require("mongoose");
const userSchema = require("../schemas/UsersSchema");

const UserModel = model("User", userSchema);    
module.exports = UserModel;