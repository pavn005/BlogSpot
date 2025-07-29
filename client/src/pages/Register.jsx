import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom' // required for Linking pages using <Link> tag
import { useNavigate } from 'react-router-dom' // for navigation after registration
import axios from 'axios' // for making HTTP requests
const Register = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  })

  const[err,setError] = useState(null)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await axios.post("http://localhost:5000/api/auth/register", input,{withCredentials: true}); // Send the registration data to the server
      navigate("/login");
    }
    catch(err){
      setError(err.response.data)
    }
  }

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="Username" name='username' onChange={handleChange}/>
        <input required type="email" placeholder="Email" name='email' onChange={handleChange}/>
        <input required type="password" placeholder="Password" name='password' onChange={handleChange}/>
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>Already have an Account ? <Link to="/login">Login</Link></span>
      </form>
    </div>
  )
}

export default Register