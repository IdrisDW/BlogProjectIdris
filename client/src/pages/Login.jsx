import React from "react";
import {Link} from 'react-router-dom'

const Login = ()=> {
 
    const[inputs,setInputs]  = useState({
        username: "",
        password: "",
    })
    const [err,setError]=useState(null);

    const navigate = useNavigate()

    const handleChange = e => {
    setInputs(prev=> ({...prev, [e.target.name]: e.target.value}))

    }

const handleSubmit= async e =>{
    e.preventDefault();
    try{
        const res= await axios.post("/auth/login", inputs);
       navigate("/");
        // console.log(res)
        
    } catch (err) {
    setError(err.response.data)
    }
  
  
};


    return (
<div className="auth">
        <h1>Login</h1>
        <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
       
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err} </p>}
        <span>
          Do you have an account? <Link to="/register">Register</Link>
        </span>
            </form>
        </div>
    )
}

export default Login