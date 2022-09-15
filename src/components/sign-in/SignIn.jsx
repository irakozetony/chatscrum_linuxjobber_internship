import React from "react";
import './signin.css'
import {Link} from 'react-router-dom'

function SignIn(){
    return(
        <div className="form_container">
            <h2>Sign in</h2>
            <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
            <form action="#">
                <div className="input_container">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email"/>
                </div>
                <div className="input_container">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="full_name"/>
                </div>
                <div className="input_container">
                    <Link to="/scrumboard" id='login_button'>Log in</Link>
                </div>
            </form>
            <p className="back_home"><Link to='/'>&laquo; Back home</Link></p>
        </div>
    )
}

export default SignIn
