import React from 'react'
import {useSelector} from 'react-redux'

import './auth.scss'
const Login = ({email, password, onChange, login}) => {
    
    const error = useSelector(state => state.auth.err)

    return (
        <div>
            <h3 className="title">LOGIN</h3>
            <form onSubmit={login}>
                <div className="login-form">
                    <h4>Email</h4>
                    <input type="email" value={email} onChange={({target: {value}})=> onChange('email', value)}/>
                    <h4>Password</h4>
                    <input type="password" value={password} onChange={({target: {value}})=> onChange('password', value)}/>
                    <button type="submit">Login</button>
                    {error ? <p>{error}</p>:null}
                    <a href="/">Forgot Password?</a>
                </div>
            </form>
        </div>
    )
}

export default Login
