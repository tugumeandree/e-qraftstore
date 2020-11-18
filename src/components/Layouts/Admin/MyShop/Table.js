// import React,{useEffect} from 'react'

// import './myshop.scss'
// const Table = ({products}) => {


//     const headers = [
//         { label: 'Avatar' },
//         { label: 'Product' },
//         { label: 'Category' },
//         { label: 'Price' },
//         { label: 'Status' },
//         { label: 'Activity' }
//     ];

//     return (
//         <div className="table-container">
//             <table>
//                 <tbody>
//                     <tr className="table-header-row">{headers.map(header => (<td><h5>{header.label}</h5></td>))}</tr>
//                         {
//                             products.map(product => {
//                                 return (
//                                     <tr className="table-detail-row">
//                                         <td><img className="image_avatar" src={product.image} alt="loading.."/></td>
//                                         <td>{product.product}</td>
//                                         <td>{product.category}</td>
//                                         <td>{product.price}</td>
//                                         <td>Active</td>
//                                         <td><button className="btn">Delete</button></td>
//                                     </tr>
//                                 )
//                             } )
//                         }
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default Table
