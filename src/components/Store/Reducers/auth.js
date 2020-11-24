import * as actionTypes from '../Actions/actions'
import {updateObject} from './utility'

const initialState = {
    userId:null,
    email:null,
    token:null,
    userName:null,
    authentic:false,
    loading:false,
    error:'',
    err:''
}

const auth = (state = initialState, action) => {
    switch(action.type) {

        //Register Reducers
        case actionTypes.REGISTER_ACTION:
            return updateObject(state, {
                loading: true,
                error:null
            })
        case actionTypes.REGISTER_SUCCESS:
            return updateObject(state, {
                loading:false,
                error:null
            })
        case actionTypes.REGISTER_FAIL:
            return updateObject(state, {
                error: action.message
            })

            //Login Reducers
            case actionTypes.LOGIN_ACTION:
            return updateObject(state, {
                loading: true,
                err: null
            })
        case actionTypes.LOGIN_SUCCESS:
            return updateObject(state, {
                userId: action.uid,
                email: action.email,
                token: action.ya,
                userName:action.displayName,
                authentic:true,
                loading:false,
                err:null
            })
        case actionTypes.LOGIN_FAIL:
            return updateObject(state, {
                err: action.message
            })
        default:
            return state
    }
}

export default auth;