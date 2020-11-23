import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {useSelector} from 'react-redux'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import logo from '../../../assets/images/logo1.png'

import './nav.scss'

const Navbar = (props) => {

    const auth = useSelector(state => state.auth.userId);
    const cart_items = useSelector(state => state.add.cart_items);
    // console.log('cart',cart_items)

    return (
        <div className="nav-container">
            <div className="nav-bar">
                <div className="nav-bar_logo">
                <Link className="link" to="/"><h1>Qraft Store</h1></Link>    
                    {/* <img src={logo} alt="Qraft Store"/> */}
                </div>
                <div>
                <Link className="link" to="/clothing">Apparel</Link>
                <Link className="link" to="/artwork">Paintings & Drawings</Link>
                <Link className="link" to="/ceramic-art">Ceramic Art</Link>
                </div>
                {/* <div className="search">
                        <input type="text" placeholder="Search Products"/>
                        <button type="submit">Search</button>
                </div> */}
                <div className="icons">
                    {/* <PersonOutlineIcon onClick={()=> props.history.push('./account')} style={{color:'#f48b16'}}/> */}
                    {cart_items.length > 0 ? <div className="cart-notify">
                        <p>{cart_items.length}</p>
                    </div> : null}
                    <ShoppingCartIcon onClick={()=> props.history.push('./cart')} style={{color:'#f48b16'}}/>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Navbar)
