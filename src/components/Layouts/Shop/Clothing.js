import React,{useEffect} from 'react'
import Product from './Product'
import {connect} from 'react-redux'
import * as actionCreator from '../../Store/ActionCreators'
import loader from '../../../assets/images/5.gif'

import './shop.scss'
const Clothing = (props) => {

    useEffect(() => {
        props.Clothing()
    },[])

    const products = props.products
    // console.log('object',products)

    const toggleModal = (data) => {
        // console.log('object',data)
        return props.history.push('./product-details',{data})
    }

    return (
        <div>
           <div className="product-container">
                {/* <h1>Clothing</h1> */}
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
        Clothing: () => dispatch(actionCreator.getClothing())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Clothing)
