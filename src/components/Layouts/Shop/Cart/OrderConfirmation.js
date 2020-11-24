import React,{useEffect} from 'react'
import {useSelector,connect} from 'react-redux'
import * as actionCreator from '../../../Store/ActionCreators'

import './cart.scss'
const OrderConfirmation = (props) => {

    useEffect(()=>{
        props.ordererdItems()
    },[])

    const ordered_items = useSelector(state => state.add.ordered_items)
    // console.log('order',ordered_items)

    return (
        <div className="confirm-container">
            <div className="confirm-message">
                <div className="message-header">
                    <h1>Thank you for your Order!</h1>
                </div>
                <div className="message-body">
                <h5>
                    Hello {ordered_items.Fname} {ordered_items.Lname} , we would like to inform you that our Team
                    has received your order and we will get back to your shortly
                    through your email, and phone call to let you know of the delivery 
                    and payment process, Thank you!
                </h5>
                <button onClick={()=>props.history.push('/')}>Continue Shopping</button>
                </div>
            </div>
        </div>
    )
}

    const mapDispatchToProps = (dispatch) => ({
        ordererdItems: () => dispatch(actionCreator.getOrderedItems())
    })

export default connect(null, mapDispatchToProps) (OrderConfirmation)
