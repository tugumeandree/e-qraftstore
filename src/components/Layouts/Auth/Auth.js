import React,{useState} from 'react'
import Login from './Login'
import Register from './Register'
import {connect} from 'react-redux'
import * as actionsCreator from '../../Store/ActionCreators'

import './auth.scss'
const Auth = (props) => {
    const [state, setState] = useState({email:'', password:''})
    const [registerState, setRegisterState] = useState({email:'', password:''})


    const registerHandler = (event) => {
        event.preventDefault()
        props.register(registerState.email, registerState.password)
    }

    const loginHandler =  (event) => {
        event.preventDefault()
        props.login(state.email,state.password)
        console.log('myToken',props.userId)
    
        setTimeout(()=> {
            props.history.push('./')
        },2000)
    }  


    return (
        <div className="auth-container">
            <Login
                email={state.email}
                password={state.password}
                onChange = {(field, value) => setState({...state, [field]: value})}
                login={loginHandler}
            />
            <Register
                email={registerState.email}
                password={registerState.password}
                onChange = {(field, value) => setRegisterState({...registerState, [field]: value})}
                register={registerHandler}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        userId: state.auth.userId  
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email,password) => dispatch(actionsCreator.login(email,password)),
        register: (email,password) => dispatch(actionsCreator.register(email,password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Auth)
