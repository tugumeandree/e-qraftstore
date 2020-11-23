import * as actionTypes from '../Actions/actions'
import {updateObject} from './utility'

const initialState = {
    cart_items:[],
    error:false
}

const getProducts = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART_SUCCESS:
            return updateObject(state, {
                cart_items: [...state.cart_items,action.product],
                error:false
            })
            case actionTypes.REMOVE_FROM_CART_SUCCESS:
                const new_cart_items= [...state.cart_items.filter(cart_item => cart_item.id !== action.id)];
            return updateObject(state, {
                cart_items: new_cart_items
            })
            case actionTypes.CLEAR_CART:
            return updateObject(state, {
                cart_items: []
            })
        default:
            return state
    }
}

export default getProducts;