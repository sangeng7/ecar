import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    user_fname: { type: String, required: true},
    user_lname: { type: String, required: true},
    user_email: {type: String, required: true, unique: true},
    user_isAdmin: {type: Boolean, default: false},
    user_password: {type: String, required: true}
},
  {timestamps: true}
)

const userModel = mongoose.model("User", userSchema)

export default userModel