import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'

// const Login = () => {
//   return (
//     <div className='auth'>
//       <h1>Login</h1>
//       <form action="">
//         <input required type="text" placeholder='username' />
//         <input required type="password" placeholder='password' />
//         <button>Login</button>
//         <span>没有账户？<Link to="/register">注册</Link></span>
//       </form>
//     </div>
//   )
// }

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: ''
  })
  const [error, serError] = useState(null)

  const navigate = useNavigate()
  const handChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))

  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post("/auth/login", inputs)
      console.log(res);
      navigate('/')

    } catch (error) {
      serError(error.response.data)

    }
  }
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form action="">
        <input required type="text" placeholder='username' name='username' onChange={handChange} />
        <input required type="password" placeholder='password' name='password' onChange={handChange} />
        <button onClick={handleSubmit}>Register</button>
        {error && <p> {error}</p>}
        <span>没有账户？<Link to="/login">注册</Link></span>
      </form>
    </div>
  )
}

export default Login
