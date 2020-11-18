import * as actionTypes from '../Actions/actions'
import {db} from '../Firebase'

export const getProductsAction = () => {
    return {
        type: actionTypes.GET_PRODUCTS_ACTION
    }
}

export const getProductsSuccess = (products) => {
    return {
        type: actionTypes.GET_PRODUCTS_SUCCESS,
        data: products
    }
}

// export const getMyProductsSuccess = (myproducts) => {
//     return {
//         type: actionTypes.GET_MYPRODUCTS_SUCCESS,
//         data: myproducts
//     }
// }

export const getProductsFail = () => {
    return {
        type: actionTypes.GET_PRODUCTS_FAIL
    }
}

export const getProducts = () => {
    return  (dispatch) => {
        dispatch(getProductsAction())   
        
        try {
            db.collection('e-qraftstore').onSnapshot((snapshot) => {
                const products = [];
                snapshot.forEach((doc) => {
                    const data = doc.data();
                    products.push({ id: doc.id, ...data });
                    // console.log('Snapshot', doc.data());
                });
                // console.log('myProducts', products);
                dispatch(getProductsSuccess(products));
            });
        }
        catch(err){
            console.log(err)
        }
    }
}

export const getClothing = () => {
    return  (dispatch) => {
        dispatch(getProductsAction())   
        
        try {
            db.collection('e-qraftstore').where('category', '==', 'Clothing').onSnapshot((snapshot) => {
                const products = [];
                snapshot.forEach((doc) => {
                    const data = doc.data();
                    products.push({ id: doc.id, ...data });
                    console.log('Snapshot', doc.data());
                });
                // console.log('myProducts', products);
                dispatch(getProductsSuccess(products));
            });
        }
        catch(err){
            console.log(err)
        }
    }
}

export const getArtWork = () => {
    return  (dispatch) => {
        dispatch(getProductsAction())   
        
        try {
            db.collection('e-qraftstore').where('category', '==', 'Artwork').onSnapshot((snapshot) => {
                const products = [];
                snapshot.forEach((doc) => {
                    const data = doc.data();
                    products.push({ id: doc.id, ...data });
                    console.log('Snapshot', doc.data());
                });
                // console.log('myProducts', products);
                dispatch(getProductsSuccess(products));
            });
        }
        catch(err){
            console.log(err)
        }
    }
}

export const getCeramicArt = () => {
    return  (dispatch) => {
        dispatch(getProductsAction())   
        
        try {
            db.collection('e-qraftstore').where('category', '==', 'Ceramic').onSnapshot((snapshot) => {
                const products = [];
                snapshot.forEach((doc) => {
                    const data = doc.data();
                    products.push({ id: doc.id, ...data });
                    console.log('Snapshot', doc.data());
                });
                // console.log('myProducts', products);
                dispatch(getProductsSuccess(products));
            });
        }
        catch(err){
            console.log(err)
        }
    }
}

// export const getMyShopProduct = () => {
//         return (dispatch,getState) => {
//             dispatch(getProductsAction())
//             const _id = getState().auth.userId
//             // console.log(_id)
//             try {
//                 db.collection('e-qraftstore').where('_id', '==', _id).onSnapshot((snapshot) => {
//                     const myproducts = [];
//                     snapshot.forEach((doc) => {
//                         const data = doc.data();
//                         myproducts.push({ id: doc.id, ...data });
//                         // console.log('Snapshot', doc.data());
//                     });
//                     console.log('myProducts', myproducts);
//                     dispatch(getMyProductsSuccess(myproducts));
//                 });
//             }
//             catch(err){
//                 console.log(err)
//             }
//         }
// }
