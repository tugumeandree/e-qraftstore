import * as actionTypes from '../Actions/actions'
import {updateObject} from './utility'

const initialState = {
    products:[],
    myproducts:[],
    loading:false,
    error:false
}

const getProducts = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCTS_ACTION:
            return updateObject(state, {
                loading: true,
                error:false
            })
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return updateObject(state, {
                loading:false,
                products: action.data,
                error:false
            })
        case actionTypes.GET_MYPRODUCTS_SUCCESS:
            return updateObject(state, {
                loading:false,
                myproducts: action.data,
                error:false
            })
        case actionTypes.GET_PRODUCTS_FAIL:
            return updateObject(state, {
                error:true
            })
        default:
            return state
    }
}

export default getProducts;