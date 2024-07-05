import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: '',
    password: ''
  })
  const handChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))

  }

  // console.log('====================================');
  // console.log(inputs);
  // console.log('====================================');
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      // const res = axios.post("http://localhost:5173/auth/register", inputs)
      const res = await axios.post("/auth/register", inputs)
      console.log(res);

    } catch (error) {
      console.log('handleSubmit 错误',error);

    }
  }
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form action="">
        <input required type="text" placeholder='username' name='username' onChange={handChange} />
        <input required type="email" placeholder='email' name='email' onChange={handChange} />
        <input required type="password" placeholder='password' name='password' onChange={handChange} />
        <button onClick={handleSubmit}>Register</button>
        <span>已有账户？<Link to="/login">登陆</Link></span>
      </form>
    </div>
  )
}

export default Register
