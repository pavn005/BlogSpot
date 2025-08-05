import React from 'react'
import { useState } from 'react'
import { useContext } from 'react' // to get the current user from the context
import { Link,useNavigate } from 'react-router-dom' // required for Linking pages using <Link> tag
import axios from 'axios' // for making HTTP requests
import { AuthContext } from '../context/AuthContext.jsx';  //to get the current user from the context

const Login = () => {

  const [input, setInput] = useState({
    username: "",
    password: "",
  })

  const[err,setError] = useState(null)

  const navigate = useNavigate();

  const { login } = useContext(AuthContext); // to get the current user from the context


  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await login(input); // call the login function from the context
      navigate("/");
    }
    catch(err){
      setError(err.response.data)
    }
  }

  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="Username" name="username" onChange={handleChange}/>
        <input required type="password" placeholder="Password" name="password" onChange={handleChange}/>
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>Don't have an Account ? <Link to="/register">Register</Link></span>
      </form>
    </div>
  )
}

export default Login