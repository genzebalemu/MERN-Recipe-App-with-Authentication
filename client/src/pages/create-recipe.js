import axios from 'axios'
import React from 'react'
import {useState} from "react"
const  CreateRecipe = () => {
  const initialRecipe ={
    name:"",
    ingredients:[],
    instructions:"",
    imageUrl:"",
    cookingTime:0,
    userOwner:0
  }

  const [recipe,setRecipe]=useState({
    initialRecipe
  })

  const handleSubmit= async (event)=>{
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/recipes",{})
    } catch (error) {
    }}

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
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
            <input type="text" id='name' placeholder="enter ur name" onChange = {handleChange} name="name" />
        ))}
        <button  onclick={addIngredient}>add ingredients</button>
        <label htmlFor='instructions'>instructions</label>
        <textarea id="instructions" name="instructions" onChange={handleChange} cols={28} rows={4}></textarea>
        <label htmlFor='ingredients'>imageUrl</label>
        <input type="text" id='imageurl'  name='imageUrl' onChange={handleChange} />
        <label htmlFor='ingredients'>cooking Time (minutes)</label>
        <input type="Number" id='cookingTime'  name='cookingTime'  onChange={handleChange}/>
      </form>
    </div>
  )
}

export default  CreateRecipe;
