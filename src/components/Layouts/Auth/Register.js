import React from 'react'
import {useSelector} from 'react-redux'

import './auth.scss'
const Register = ({email,password,register,onChange}) => {

    const error = useSelector(state => state.auth.error)
    // console.log('myError',error)

    return (
        <div>
            <h3 className="title">REGISTER</h3>
            <form onSubmit={register}>
                <div className="login-form">
                    <h4>Email</h4>
                    <input type="email" value={email} onChange={({target: {value}})=> onChange('email', value)}/>
                    <h4>Password</h4>
                    <input type="password" value={password} onChange={({target: {value}})=> onChange('password', value)}/>
                    <button type="submit">Register</button>
                    {error ? <p>{error}</p>:null}
                    <a href="/">Forgot Password?</a>
                </div>
            </form>
        </div>
    )
}

export default Register
