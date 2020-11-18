// import React, {useState} from 'react'
// import { connect } from 'react-redux';
// import * as actionCreators from '../../../Store/ActionCreators/';
// import LinearProgress from '@material-ui/core/LinearProgress';
// import firebase from 'firebase'

// import './add.scss'

// // require('../../Store/Firebase');

// const AddProduct = (props) => {
//     const [ image, setImage ] = useState([]);
// 	const [ progress, setProgress ] = useState(0);
// 	const [ item, setProduct ] = useState('');
// 	const [ suk, setSuk ] = useState('');
// 	const [ price, setPrice ] = useState('');
// 	const [ description, setDescription ] = useState('');
//     const [ category, setCategory ] = useState('');
    
//     const imageUploadHandler = async (event) => {
// 		if (event.target.files[0]) {
// 			const name = event.target.files[0].name;
// 			// console.log('image', name);
// 			try {
// 				const uploadImage = firebase.storage().ref();
// 				const _ref = uploadImage.child(`images/${name}`);
// 				_ref.put(event.target.files[0]).on(
// 					'state_changed',
// 					(snapshot) => {
// 						const progress = Math.ceil(snapshot.bytesTransferred / snapshot.totalBytes * 100);
// 						setProgress(progress < 100 ? progress : 0);
// 						// console.log(progress);
// 					},
// 					(error) => {
// 						console.log('An error occured', error);
// 					},
// 					async () => {
// 						const url = await _ref.getDownloadURL();
// 						setImage(url);
// 					}
// 				);
// 			} catch (error) {
// 				console.log('Error uploading', error);
// 			}
// 		}
// 	};

// 	const onProductSubmit = (event) => {
// 		event.preventDefault();
// 		props.addProduct(image, product, suk, price, description, category);
// 		setImage();
// 		setProduct('');
// 		setPrice('');
// 		setSuk('');
// 		setDescription('');
// 		setCategory('');
// 	};

//     const product = item.toString();
    
//     return (
//         <div>
//             <form onSubmit={onProductSubmit}>
// 				<div className="add-container">
// 					{props.error ? (
// 						<div className="error-container">
// 							<p>Post not added</p>
// 						</div>
// 					) : null}
// 					<h2>Add new product </h2>

// 					<div className="upload">
// 						<input type="file" multiple placeholder="Choose featured Image" onChange={imageUploadHandler} />
// 						<p>Upload Product Image(JPEG file)</p>
// 						<img src={image} />
// 					</div>
// 					{progress > 0 && (
// 						<LinearProgress
// 							value={progress}
// 							variant="determinate"
// 							style={{ width: '20%' }}
// 							color="secondary"
// 						/>
// 					)}
// 					<div className="form_container">
// 						<div className="input_div">
// 							<input
// 								value={product}
// 								type="text"
// 								placeholder="Product"
// 								onChange={(e) => setProduct(e.target.value)}
// 							/>
// 							<input
// 								value={category}
// 								type="text"
// 								placeholder="Category"
// 								onChange={(e) => setCategory(e.target.value)}
// 							/>
// 							<input value={suk} type="text" placeholder="SKU" onChange={(e) => setSuk(e.target.value)} />
// 							<input
// 								value={price}
// 								type="text"
// 								placeholder="Price"
// 								onChange={(e) => setPrice(e.target.value)}
// 							/>
// 						</div>
// 						<textarea
// 							value={description}
// 							placeholder="Production Description"
// 							onChange={(e) => setDescription(e.target.value)}
// 						/>
// 						<button>Add Product</button>
// 					</div>
// 					{props.loading ? (
// 						<LinearProgress style={{ width: '20%', marginTop: '1rem' }} color="secondary" />
// 					) : null}
// 					<div>
						
// 					</div>
// 				</div>
// 			</form>
//         </div>
//     )
// }

//    const mapStateToProps = (state) => {
//         return {
//             loading: state.add.loading,
//             error: state.add.error
//         }
//     }

//    const mapDispatchToProps = (dispatch) => {
//        return {
//            addProduct: (image, product, suk, price, description, category) => dispatch(actionCreators.addProduct(image, product, suk, price, description, category))
//        }
//    }

// export default connect(mapStateToProps,mapDispatchToProps) (AddProduct)
