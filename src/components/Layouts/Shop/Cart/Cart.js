import React,{useState,useEffect} from 'react'
import {useSelector,connect} from 'react-redux'
import OrderItem from './OrderItem'
import * as actionCreator from '../../../Store/ActionCreators'
import emailjs from 'emailjs-com';

import './cart.scss'
const Cart = (props) => {

    const [modal,setModal] = useState(false)

    const [state,setState] = useState({
        Fname:'',
        Lname:'',
        address:'',
        email:'',
        phoneNumber:'',
    })  

    useEffect(()=>{
        console.log(cart_items)
    },[])

    const cart_items = useSelector(state => state.add.cart_items)
    console.log(cart_items)
   
    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }


    
    
    
    const orderItemHandler = (e) => {
        e.preventDefault()
        const totalPrice = cart_items.reduce((accc, cv) => accc + parseInt(cv.price), 0)
        props.order(cart_items,state.Fname,state.Lname,state.address,state.email,state.phoneNumber,totalPrice)
        setModal(false)
        props.emptyCart()
        props.history.push('./cart')
        // emailjs.sendForm('e-qraft_store_service', 'template_solfoya', e.target,'user_D5YwjokeRFEKI8kMRhzja')
		// 	.then((result) => {
		// 		console.log(result.text);
		// 	}, (error) => {
		// 		console.log(error.text);
		// 	});
    }


    // console.log('Items',state)
    return (
        <div className="cart-main">
            
            {modal ? <OrderItem
                Fname={state.Fname}
                Lname={state.Lname}
                address={state.address}
                email={state.email}
                phoneNumber={state.phoneNumber}
                show={openModal}
                close={closeModal}
                onChange = {(field, value) => setState({...state, [field]: value})}
                order={orderItemHandler}
                /> : null}
            
            {cart_items.length > 0 ? <h1>Your Cart Items</h1> : <h1>No items added yet</h1>}
            {cart_items.length > 0 ? (
                <div className="cart-container">
                    {cart_items && cart_items.map(cart_item => (
                    <div className="_cart" key={cart_item.id}>
                        <img src={cart_item.image} alt="product"/>
                        <div>
                            <h4>{cart_item.product}</h4>
                            <h6>{cart_item.description}</h6>
                        </div>
                        <div>
                            <h2>Shs {cart_item.price}</h2>
                            <button onClick={()=>props.removeCartItem(cart_item.id)}>Remove</button>
                        </div>
                    </div>
                    ))}
                    <div>
                        <h2>Total Price: {cart_items.reduce((accc, cv) => accc + parseInt(cv.price), 0)} Shs</h2>
                    <button className="order-btn"onClick={openModal}>{cart_items.length == 1 ? 'Order Item': 'Order Items'}</button>
                    </div>
                </div>
                
            ): null }
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        order: (cart_items,Fname,Lname,address,email,phoneNumber,totalPrice) => dispatch(actionCreator.orderItem(cart_items,Fname,Lname,address,email,phoneNumber,totalPrice)),
    removeCartItem: (id) => dispatch(actionCreator.removeCartItem(id)),
    emptyCart: () => dispatch(actionCreator.emptyCart())
    }
}

export default connect(null ,mapDispatchToProps) (Cart)
