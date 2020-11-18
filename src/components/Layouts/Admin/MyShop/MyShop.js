// import React,{useEffect} from 'react'
// import Stats from './Stats'
// import Table from './Table'
// import {connect,useSelector} from 'react-redux'
// import * as actionCreators from '../../../Store/ActionCreators'

// import './myshop.scss'
// const MyShop = (props) => {

//     useEffect(()=>{
//         props.getMyProducts()
//     },[])
   
//     const products = useSelector(state => state.products.myproducts)

//     console.log('hey',products)

    

//     return (
//         <div>
//             <div className="my-shop-container">
//                 <Stats/>
//                 <Table products={products}/>
//             </div>
//         </div>
//     )
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getMyProducts: () => dispatch(actionCreators.getMyShopProduct())
//     }
// }

// export default connect (null,mapDispatchToProps) (MyShop)
