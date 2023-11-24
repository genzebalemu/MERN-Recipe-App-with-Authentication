import mongoose from "mongoose";


const RecipesSchema = new mongoose.Schema({
  name: {type: String,required: true},
  ingredients:{type:[String],required:true},
  instructions:{type:String, required:true},
  imageUrl: {type:String, required:true},
  cookingTime :{type:Number,required :true},
  userOwner: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true }
});

// Step 2: Create a Model
export const RecipesModel = new mongoose.model('Recipes', RecipesSchema);