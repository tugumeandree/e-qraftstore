import React,{useState,useEffect} from 'react'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {db} from '../../Store/Firebase'

import './product.scss'
const Product = (props) => {
    const [product ,setProduct] = useState({})
    const [value, setValue] = useState();
    console.log('rating',value)

    useEffect(() => {
        const data = props.location.state.data
        setProduct(data)
    },[])

    const ratingHandler = () => {
        const _id = product.id
        db.collection('e-qraftstore').doc(_id).update({rating:"4"})
        .then(res => {
            // console.log('rating',res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const rating = parseInt(product.rating)



    return (
        <div className="product-details">
            <div className="col-1">
                <h2>{product.product}</h2>
                <img src={product.image} alt="product image"/>
                <h4>{product.description}</h4>
            </div>
            <div className="col-2">
                <h1>Shs {product.price}</h1>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating
                        name="simple-controlled"
                        value={rating}
                        precision={0.5}
                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                        onChange={(event, newValue) => {
                            console.log('Event, value --', event, value)
                            setValue(newValue);
                          }}
                    />
                </Box>
                <button type="submit" onClick={ratingHandler}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product
