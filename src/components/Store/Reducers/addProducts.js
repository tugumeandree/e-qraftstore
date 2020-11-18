import * as actionTypes from '../Actions/actions'
import {updateObject} from './utility'

const initialState = {
    cart_items:[],
    error:false
}

const getProducts = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART_SUCCESS:
            // const new_cart_items= [...state.cart_items.filter(product => product.id !== action.id)];
            return updateObject(state, {
                cart_items: [...state.cart_items, action.product],
                error:false
            })
        case actionTypes.ADD_TO_CART_FAIL:
            return updateObject(state, {
                error:true
            })
        default:
            return state
    }
}

export default getProducts;