// import express from "express"


// const app=express()

// app.get("/", (req,res) => {
//     res.json("hello thi is th ebackend")
// })

// app.get("/posts", (req, res) => {
//     const q= "SELECT * FROM posts"
// })
// z
// app.listen(3000, ()=>{
//     console.log("connected to backedn")
// })

import React from "react";
import {useState} from "react";
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios"
 


const Register = ()=> {
    const[inputs,setInputs]  = useState({
        username: "",
        email: "",
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
        const res= await axios.post("/auth/register", inputs);
       navigate("/login");
        // console.log(res)
        
    } catch (err) {
    setError(err.response.data)
    }
    //     if (error.response) {
    //         // If server responded with a status code for a request
    //         console.log("Data ", error.response.data);
    //         console.log("Status ", error.response.status);
    //         console.log("Headers ", error.response.headers);
    //     } else if (error.request) {
    //         // Client made a request but response is not received
    //         console.log("called", error.request);
    //     } else {
    //         // Other case
    //         console.log("Error", error.message);
    //     }
       
    // }
     
  
};

console.log(inputs)

return (
    <div className="auth">
      <h1>Register</h1>
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
          type="email"
          placeholder="email"
          name="email"
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
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register