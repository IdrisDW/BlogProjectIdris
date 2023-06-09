import React from "react";
import {Link} from 'react-router-dom'

const Register = ()=> {
    return (
<div className="auth">
        <h1>Register</h1>
        <form>
            <input required type="text" placeholder="username"/>
            <input required typer="email" placeholder="email"/>
            <input required typer="password" placeholder="password"/>
            <button>Register</button>
            <p> This is an error ! </p>
            <span>Dont you have an account <Link to= "/login"> Login </Link> 
            </span>
            </form>
        </div>
    )
}

export default Register