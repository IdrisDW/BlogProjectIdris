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
import {Link} from 'react-router-dom'
import axios from "axios"
 
 

const Register = ()=> {
    const[inputs,setInputs]  = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleChange = e => {
    setInputs(prev=> ({...prev, [e.target.name]: e.target.value}))

    }

const handleSubmit= async  e =>{
    e.preventDefault()
    try{
        const res= await axios.post("/auth/register",inputs)
        console.log(res)
    }catch(err){
        console.log(err)
    }
  
}

    return (
<div className="auth">
        <h1>Register</h1>
        <form>
            <input required type="text" placeholder="username" onChange={handleChange}/>
            <input required typer="email" placeholder="email" onChange={handleChange}/>
            <input required typer="password" placeholder="password" onChange={handleChange}/>
            <button onClick={handleSubmit     }>Register</button>
            <p> This is an error ! </p>
            <span>Dont you have an account <Link to= "/login"> Login </Link> 
            </span>
            </form>
        </div>
    )
}

export default Register