import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './SignUp.css'

function SignUp() {

    const history = useHistory();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [emptyError, setEmptyError] = useState(false)
    const [passwordNotMathched, setPasswordNotMatched] = useState(false)

    const signUp = (e) => {
        if (email && password && confirmPassword) {
            if (password === confirmPassword) {
                history.push('/');
                setEmptyError(false)
                setPasswordNotMatched(false)
            }else{
                setEmptyError(false)
                setPasswordNotMatched(true)
            }
        }else{
            setEmptyError(true)
            setPasswordNotMatched(false)
        }
    }

    return (
        <div className="signup">
            <h1>Welcome back</h1>
            <input className="signup__input" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
            <input className="signup__input" placeholder="Enter password" type="password" onChange={(e) => setPassword(e.target.value)}/>
            <input className="signup__input" placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)}/>
            <button className="signup__button" type="submit" onClick={signUp}>Sign Up</button>
            <div className="signup__noAccount">
                Already a member?   
                <Link to="/login" className="signup__link">
                    <a className="signup__createAccount">
                        Sign In
                    </a>
                </Link>
            </div>
            {
                emptyError ? <p className="signUp__error">Please enter credentials carefully</p> : null
            }
            {
                passwordNotMathched ? <p className="signUp__error">Passwords do not match</p> : null
            }
        </div>
    )
}

export default SignUp
