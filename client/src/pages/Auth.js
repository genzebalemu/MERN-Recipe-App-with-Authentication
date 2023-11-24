import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { useCookies } from 'react-cookie';
import { useNavigate} from "react-router-dom";
const Auth = () => {
  return (
    <div className='auth'>
      <Login />
      <Registor />
    </div>
  )
}


export const Registor = () => {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const  navigate = useNavigate();
  const handleSubmit= async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/auth/register",{username,password})
      alert("registration completed! now ")
      navigate("/login")
    }catch (error) {
      console.error(error)
    }
  }
  return (
    <div className='auth-container'>
        <h2>Registor</h2>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='username'>username:</label>
            <input type="text" value={username} id='username' onChange={(event)=>setUsername(event.target.value)} placeholder="enetr ur username" />
            <label htmlFor='password'>password:</label>
            <input type="password" id="password"  value={password} onChange={(event)=>setPassword(event.target.value)} placeholder='Enter ur pasword'/>
            <button type="submit">registor</button>
          </div>
        </form>
    </div>
  )
}

export const Login =  () => {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const [_,setCookies] = useCookies();
  const  navigate = useNavigate();
  const handleSubmit = async (e)=>{
    e.preventDefault()
    try{
      const response = await axios.post("http://localhost:4000/auth/login",{username,password})

      alert("login complted! now go to home")
      setCookies("access_token", response.data.token)
      window.localStorage.setItem("userID", response.data.userID)
      navigate("/")
    }catch(error){
      console.error(error)
    }}


  return (
    <div className='auth-container'>
      <h2>Login </h2>
    <form className='form' onSubmit={ handleSubmit }>
      <div className='form-group'>
        <label htmlFor='username' value={username}> username: </label>
        <input type="text" id='username' onChange={(event)=>setUsername(event.target.value)} placeholder="enetr ur username" />
        <label htmlFor='password'>password:</label>
        <input type="password" id="password"  value={password} onChange={(event)=>setPassword(event.target.value)} placeholder='Enter ur pasword'/>
        <button type="submit" >login</button>
      </div>
    </form>
  </div>
  )
}


export default Auth
