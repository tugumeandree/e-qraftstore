import React,{useState} from 'react'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {useSelector,connect} from 'react-redux'
import * as actionCreators from '../../Store/ActionCreators'

import './shop.scss'
const Product = (props) => {

    const auth = useSelector(state => state.auth.userId);
    const cart_items = useSelector(state => state.add.cart_items);

    const [value, setValue] = useState('');

    const rating = parseInt(props.product.rating)


    const product = props.product
    const toggle = props.toggle
        
    return (
        <div className="product-card" >
                <div>
                <img src={product.image} alt="logo" onClick={()=> toggle(product)}/>
                <div>
                    <h4>{product.product}</h4>
                    <p>{product.description}</p>
                    <h4>Shs {product.price}</h4>
                
                </div>
                </div>
            
                <div className="icon-row">
                <Box className="rating" component="fieldset" mb={3} borderColor="transparent">
                    <Rating
                        name="simple-controlled"
                        value={rating}
                        precision={0.5}
                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                    />
                <AddShoppingCartIcon onClick={() =>props.addToCart(product)} className="cart"/>
                </Box>
                </div>
            {/* <button type="submit">Add to Cart</button> */}
        </div>
    )
}



    const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => dispatch(actionCreators.addToCart(product))
    }
}

export default connect(null,mapDispatchToProps) (Product)
