import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import './Login.css';

function Login() {

    const history = useHistory();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        if (email && password) {
            history.push('/create')          
           // this.props.history.push('/')  
        }
    }

    return (
        <div className="login">
            <h1>Welcome back</h1>
            <input className="login__input" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
            <input className="login__input" placeholder="Enter password" type="password" onChange={(e) => setPassword(e.target.value)}/>
            <button className="login__button" type="submit" onClick={login}>Sign In</button>
            <div className="login__noAccount">
                Don't have an account?
                <Link to="/signUp" className="login__link">
                    <a className="login__createAccount">
                        Create one
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Login
