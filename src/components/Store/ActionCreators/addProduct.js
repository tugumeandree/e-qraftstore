import * as actionTypes from '../Actions/actions';
import { db } from '../Firebase';

// export const addProductAction = () => {
// 	return {
// 		type: actionTypes.ADD_PRODUCT_ACTION
// 	};
// };

// export const addProductSuccess = (postId) => {
// 	return {
// 		type: actionTypes.ADD_PRODUCT_SUCCESS,
// 		name: postId
// 	};
// };

// export const addProductFail = (error) => {
// 	return {
// 		type: actionTypes.ADD_PRODUCT_FAIL,
// 		error: error
// 	};
// };

// export const addProduct = (image, product, suk, price, description, category) => {
// 	return (dispatch,getState) => {
// 		dispatch(addProductAction());

// 		const _id = getState().auth.userId

// 		const post = {
// 			_id,
// 			image,
// 			product,
// 			suk,
// 			price,
// 			description,
// 			category,
// 			date: new Date()
// 		};

// 		db
// 			.collection('e-qraftstore')
// 			.doc()
// 			.set(post)
// 			.then((res) => {
// 				// console.log('response', res);
// 				dispatch(addProductSuccess());
// 			})
// 			.catch((error) => {
// 				console.log('response', error);
// 			});
// 	};
// };

export const addToCartSuccess = (cart_Items) => {
	return {
		type:actionTypes.ADD_TO_CART_SUCCESS,
		product: cart_Items,
	}
}

export const addToCartFail = () => {
	return {
		type:actionTypes.ADD_TO_CART_FAIL
	}
}

export const addToCart = (product) => {
	return dispatch => {
		const cart_Items = []
		cart_Items.push()
		dispatch(addToCartSuccess({...product, quantity: 1}))



	}
}

