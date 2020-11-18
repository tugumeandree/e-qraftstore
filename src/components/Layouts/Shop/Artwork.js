import React,{useEffect} from 'react'
import Product from './Product'
import {connect} from 'react-redux'
import * as actionCreator from '../../Store/ActionCreators'
import loader from '../../../assets/images/5.gif'

import './shop.scss'
const Artwork = (props) => {

    useEffect(() => {
        props.Artwork()
    },[])

    const products = props.products
    // console.log('object',products)

    const toggleModal = (data) => {
        // console.log('object',data)
        return props.history.push('./product-details',{data})
    }

    return (
        <div>
            {/* <h1>Artwork</h1> */}
            <div className="product-container">  
                {props.loading ? (
                <div>
                    <img src={loader} alt="Loading...."/>
                </div>
            ): null}
                {products.map(product => (
                    <Product key={product.id} toggle={toggleModal} product={product}/>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        loading: state.products.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Artwork : () => dispatch(actionCreator.getArtWork())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Artwork)
