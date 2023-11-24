import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password :{type:String, required:true},
  savedrecipes:[{type: { type: mongoose.Schema.Types.ObjectId, ref: "recipes", required: true }}]
});

// Step 2: Create a Model
export const UserModel = new mongoose.model('User', UserSchema);