import axios from 'axios';
import React from 'react';
import {useState} from "react";


const  CreateRecipe = () => {
  const initialRecipe = {
    name:"",
    ingredients:[],
    instructions:"",
    imageUrl:"",
    cookingTime:0,
    userOwner:0
  }

  const [recipe,setRecipe] = useState(initialRecipe)

  const handleSubmit = async (event)=>{
    event.preventDefault();
    try {
      await axios.post("http://localhost:4000/recipes",recipe)
      alert("recipe created successfully")
    } catch (error) {
    }}

  const handleChange = (event) => {
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
  };

  const handleIngredientChange = (event,idx) => {
    const {value} = event.target;
    const ingredients=recipe.ingredients;
    ingredients[idx]=value;

    setRecipe({ ...recipe,ingredients})


  };

  const addIngredient=()=>{
    setRecipe({ ...recipe, ingredients:[...recipe.ingredients, ""]})
  }
  return (
    <div>
      <h2>create Recipes</h2>
      <form onSubmit = {handleSubmit} className="create-recipe">
        <label htmlFor='name'>Name</label>
        <input type="text" id='name'  placeholder="enter ur name" onChange={handleChange} name="name" />
        <label htmlFor='ingredients'>ingredients</label>
        { recipe.ingredients.map((ingredient,key)=>(
            <input key={key} type="text" id='name' placeholder="Add ur ingredient" onChange = {handleIngredientChange} name="name" />
        ))}
        <button  onClick={addIngredient}>add ingredients</button>
        <label htmlFor='instructions'>instructions</label>
        <textarea id="instructions" name="instructions" onChange={handleChange} cols={28} rows={4}></textarea>
        <label htmlFor='ingredients'>imageUrl</label>
        <input type="text" id='imageurl'  name='imageUrl' onChange={handleChange} />
        <label htmlFor='ingredients'>cooking Time (minutes)</label>
        <input type="Number" id='cookingTime'  name='cookingTime'  onChange={handleChange}/>
        <button type="submit" > create Recipe</button>
      </form>
    </div>
  )
}

export default  CreateRecipe;
