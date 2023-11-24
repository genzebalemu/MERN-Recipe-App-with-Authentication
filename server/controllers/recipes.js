import { RecipesModel } from "../models/recipes.js";
import { UserModel } from "../models/User.js"

export const getrecipes = async(req,res) => {
    try {
        const Recipes = await RecipesModel.find({})
        res.status(200).json(Recipes)
    }catch (error) {
        res.json(error)
    }
}


export const createrecipes = async(req,res) => {
    const newRecipes = new RecipesModel(req.body)
    try {
        await newRecipes.save();
        res.status(200).json(newRecipes)
    } catch (error) {
        res.json(error)
    }
}



export const updaterecipes = async(req,res) => {
    try {
        const recipe = await RecipesModel.findById(req.body.recipeID);
        const user = await  UserModel.findById(req.body.userID)
        user.savedrecipes.push(recipe);
        await user.save();
        res.json({savedRecipes: user.savedrecipes})
    } catch (error) {
        res.json(error)
    }
}

export const getrecipe = async(req,res)=>{
    try {
        const user = await UserModel.find(req.body.userID)
        res.json({savedRecipes: user.savedRecipes})
    } catch (error) {
        res.json(error)
    }
}

export const getsavedrecipes = async(req,res)=>{
    try {
        const user = await UserModel.find(req.body.userID)
        res.json({savedRecipes: user.savedRecipes})
    } catch (error) {
        res.json(error)
    }
}