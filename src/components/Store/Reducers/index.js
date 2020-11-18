import {combineReducers} from 'redux'
import getProductReducer from './getProducts'
import authReducer from './auth'
import addProductsReducer from './addProducts'

export default combineReducers({
    products : getProductReducer,
    auth : authReducer,
    add: addProductsReducer
})