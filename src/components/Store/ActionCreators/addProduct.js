import * as actionTypes from '../Actions/actions';
import { db } from '../Firebase';


export const addToCartSuccess = (cart_Items) => {
	return {
		type:actionTypes.ADD_TO_CART_SUCCESS,
		product: cart_Items,
	}
}

export const addToCart = (product) => {
	return dispatch => {
		const cart_Items = []
		cart_Items.push()
		dispatch(addToCartSuccess({...product}))
	}
}

export const  removeCartItem = (id) => {
	return {
		type:actionTypes.REMOVE_FROM_CART_SUCCESS,
		id
	}
 }

export const orderItemSuccess = (cart_Items) => {
	return {
		type:actionTypes.ADD_TO_CART_SUCCESS,
		product: cart_Items,
	}
}

export const orderItemFail = (err) => {
	return {
		type:actionTypes.ORDER_ITEM_FAIL,
		err
	}
}

export const emptyCart = () => {
	return {
		type:actionTypes.CLEAR_CART,
	}
}


export const orderItem = (cart_items,Fname,Lname,address,email,phoneNumber,totalPrice) => {
	return (dispatch) => {
		const order_details = {cart_items,Fname,Lname,address,email,phoneNumber,totalPrice}
		// const _cartItems = {cart_items}
		db.collection('ordered-items').doc().set(order_details)
		.then(order => {
		})
		.catch(err => {
			console.log(err)
			dispatch(orderItemFail(err))
		})
	}

}

