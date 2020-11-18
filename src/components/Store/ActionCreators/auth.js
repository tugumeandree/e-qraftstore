import * as actionTypes from '../Actions/actions'
import {auth,db} from '../Firebase'


export const loginAction = () => {
    return {
        type: actionTypes.LOGIN_ACTION
    }
}

export const loginSuccess = (userId,email,userName,token) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        uid: userId,
		email: email,
		displayName: userName,
		ya : token
    }
}

export const loginFail = () => {
    return {
        type: actionTypes.LOGIN_FAIL
    }
}

export const registerAction = () => {
    return {
        type: actionTypes.REGISTER_ACTION
    }
}

export const registerSuccess = () => {
    return {
        type: actionTypes.REGISTER_SUCCESS,
    }
}

export const registerFail = () => {
    return {
        type: actionTypes.REGISTER_FAIL
    }
}

export const register = (email, password) => {
    return async dispatch => {
        dispatch(registerAction())

       await auth.createUserWithEmailAndPassword(email,password)
        .then(res => {
            const user = {
                email,
                userId: res.user.uid,
                date: new Date()
            }
            db.doc(`users/${res.user.uid}`).set(user)
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const login = (email, password) => {
    return async (dispatch) => {
        dispatch(loginAction())

        await auth.signInWithEmailAndPassword(email,password)
		.then(res => {
			// console.log('Authentication',res.user)
            dispatch(loginSuccess(res.user.uid,res.user.email,res.user.displayName,res.user.ya))
                                     
        })
		.catch(err => {
			console.log(err)
        })
        // let _user = db.collection('users').where('email', '==', email).get()
        //     .then(querySnapshot => {
        //         querySnapshot.forEach(doc => {
        //         // console.log(doc.data().email)
        //             // _userId = doc.data().email
        //             if(_user){
        //                 console.log('user',_user)                
                        
        //             }
                    
        //       })
        //     })
            
            
    }  
}