import * as actionTypes from '../Actions/actions'
import {updateObject} from './utility'

const initialState = {
    userId:null,
    email:null,
    token:null,
    userName:null,
    loading:false,
    error:false
}

const auth = (state = initialState, action) => {
    switch(action.type) {

        //Register Reducers
        case actionTypes.REGISTER_ACTION:
            return updateObject(state, {
                loading: true,
                error:false
            })
        case actionTypes.REGISTER_SUCCESS:
            return updateObject(state, {
                loading:false,
                error:false
            })
        case actionTypes.REGISTER_FAIL:
            return updateObject(state, {
                error:true
            })

            //Login Reducers
            case actionTypes.LOGIN_ACTION:
            return updateObject(state, {
                loading: true,
                error:false
            })
        case actionTypes.LOGIN_SUCCESS:
            return updateObject(state, {
                userId: action.uid,
                email: action.email,
                token: action.ya,
                userName:action.displayName,
                loading:false,
                error:false
            })
        case actionTypes.LOGIN_FAIL:
            return updateObject(state, {
                error:true
            })
        default:
            return state
    }
}

export default auth;