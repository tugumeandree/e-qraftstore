import React from 'react'
import CloseIcon from '@material-ui/icons/Close';

import './cart.scss'
const OrderItem = (props) => {

    const cssClasses = ['order-inner',props.show ? 'orderInnerOpen' : 'orderInnerClosed']

    return (
        <div className="order-main"  >     
            <form onSubmit={props.order} className={cssClasses.join(' ')}>
                <div className="close-icon">
                    <CloseIcon className="icon" onClick={props.close}/>
                </div>
                <h3>Order Details</h3>
                    <input type="text" autoComplete="off" placeholder="First Name" name="Fname" value={props.Fname} onChange={({target: {value}})=> props.onChange('Fname', value)}/> 
                    <input type="text" autoComplete="off" placeholder="Last Name" name="Lname" value={props.Lname} onChange={({target: {value}})=> props.onChange('Lname', value)}/>
                    <input type="text" autoComplete="off" placeholder="Address" name="address" value={props.address} onChange={({target: {value}})=> props.onChange('address', value)}/>
                    <input type="email" autoComplete="off" placeholder="Email" name="email" value={props.email} onChange={({target: {value}})=> props.onChange('email', value)}/>
                    <input type="text" autoComplete="off" placeholder="Phone Number" name="phoneNumber" value={props.phoneNumber} onChange={({target: {value}})=> props.onChange('phoneNumber', value)}/>
                    <button>Order Now</button>
            </form>
                
        </div>
    )
}

export default OrderItem
