
import { RecipesModel } from "../models/recipes.js";
export const getrecipes = async(req,res) => {
    try {
        const Recipes = await RecipesModel.find({})
        res.status(200).json(Recipes)
    } catch (error) {
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
    // const {}
    try {
        // await newRecipes.save();
        // res.status(200).json(newRecipes)
    } catch (error) {
        res.json(error)
    }
}