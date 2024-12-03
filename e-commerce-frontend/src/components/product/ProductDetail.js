/* ================= With wishlist ================ */

// import { Fragment, useEffect, useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { useNavigate, useParams } from "react-router-dom";
// import { createReview, getProduct } from "../../actions/productActions"
// import Loader from '../layouts/Loader';
// import { Carousel } from 'react-bootstrap';
// import MetaData from "../layouts/MetaData";
// import { addCartItem } from "../../actions/cartActions";
// import { clearReviewSubmitted, clearError, clearProduct } from '../../slices/productSlice';
// import { Modal } from 'react-bootstrap';
// import { toast } from "react-toastify";
// import ProductReview from "./ProductReview";
// import { addToWishlist } from "../../actions/wishlistActions";




// export default function ProductDetail() {
//     const { loading, product = {}, isReviewSubmitted, error } = useSelector((state) => state.productState);
//     const { user } = useSelector(state => state.authState);
//     const dispatch = useDispatch();
//     const { id } = useParams()
//     const [quantity, setQuantity] = useState(1);
//     const navigate = useNavigate();

//     const increaseQty = () => {
//         const count = document.querySelector('.count')
//         if (product.stock === 0 || count.valueAsNumber >= product.stock) return;
//         const qty = count.valueAsNumber + 1;
//         setQuantity(qty);
//     }
//     const decreaseQty = () => {
//         const count = document.querySelector('.count')
//         if (count.valueAsNumber === 1) return;
//         const qty = count.valueAsNumber - 1;
//         setQuantity(qty);
//     }

//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     const [rating, setRating] = useState(1);
//     const [comment, setComment] = useState("");


//     //console.log(id);

//     const reviewHandler = () => {
//         const formData = new FormData();
//         formData.append('rating', rating);
//         formData.append('comment', comment);
//         formData.append('productId', id);
//         dispatch(createReview(formData))

//     }

//     useEffect(() => {
//         if (isReviewSubmitted) {
//             handleClose()
//             toast('Review Submitted successfully', {
//                 type: 'success',
//                 position: toast.POSITION.BOTTOM_RIGHT,
//                 onOpen: () => dispatch(clearReviewSubmitted())
//             })

//         }
//         if (error) {
//             toast(error, {
//                 position: toast.POSITION.BOTTOM_RIGHT,
//                 type: 'error',
//                 onOpen: () => { dispatch(clearError()) }
//             })
//             return
//         }
//         if (!product._id || isReviewSubmitted) {
//             dispatch(getProduct(id))
//         }

//         return () => {
//             dispatch(clearProduct())
//         }


//     }, [dispatch, id, isReviewSubmitted, error, product._id])

//     const handleAddToCart = () => {
//         if (!user) {
//             // User is not logged in, navigate to the login page
//             navigate('/login');
//             return;
//         }

//         // User is logged in, proceed to add item to the cart
//         dispatch(addCartItem(product._id, quantity));
//         toast('Cart Item Added!', {
//             type: 'success',
//             position: toast.POSITION.BOTTOM_RIGHT,
//         });
//     };

//     const handleAddToWishlist = () => {
//         if (!user) {
//             // User is not logged in, navigate to the login page
//             navigate('/login');
//             return;
//         }

//         // User is logged in, proceed to add item to the wishlist
//         dispatch(addToWishlist(product._id));
//         toast('Product Added to Wishlist!', {
//             type: 'success',
//             position: toast.POSITION.BOTTOM_RIGHT,
//         });
//     };

//     return (
//         <Fragment>
//             {loading ? <Loader /> :
//                 <Fragment>
//                     <MetaData title={product.name} />
//                     <div className="row f-flex justify-content-around">
//                         <div className="col-12 col-lg-5 img-fluid" id="product_image">
//                             <Carousel pause="hover">
//                                 {product.images && product.images.length > 0 && product.images.map(image =>
//                                     <Carousel.Item key={image._id}>
//                                         <img className="d-block w-100" src={image.image} alt={product.name} height="500" width="500" />
//                                     </Carousel.Item>
//                                 )}
//                             </Carousel>
//                         </div>

//                         <div className="col-12 col-lg-5 mt-5 ml-5">
//                             <h3>{product.name}</h3>
//                             <p id="product_id">Product # {product._id}</p>

//                             <hr />

//                             <div className="rating-outer">
//                                 <div className="rating-inner"  style={{ width: `${product.ratings / 5 * 100}%` }} ></div>
//                             </div>
//                             <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>

//                             <hr />                           

//                          <p className="price">
//                             {product.offerPrice > 0 && (
//                                 <>
//                                 <span className="old-price">₹{product.price}</span>
//                                 <span className="offer-price"> Offer Price: ₹{product.offerPrice}</span>
//                                 </>
//                             )}
//                             {!product.offerPrice && <span className="price">₹{product.price}</span>}    
//                         </p>                        
                            

//                             <div className="d-flex justify-content-between" style={{ paddingBottom: '15px', marginLeft:'20px' }}>
//                                 <label className=''>
//                                     <input
//                                         type="radio"
//                                         name="size"
//                                         value="1 - 3"
//                                     /> 0 - 3yrs
//                                 </label>
//                                 <label className=''>
//                                     <input
//                                         type="radio"
//                                         name="size"
//                                         value="3 - 6"
//                                     /> 3 - 5yrs
//                                 </label>
//                                 <label className=''>
//                                     <input
//                                         type="radio"
//                                         name="size"
//                                         value="6 - 12"
//                                     /> 5 - 7yrs
//                                 </label>
//                                 <label className=''>
//                                     <input
//                                         type="radio"
//                                         name="size"
//                                         value="6 - 12"
//                                     /> 7 - 10yrs
//                                 </label>
//                                 <br />
//                             </div>

//                             <div className="d-flex justify-content-between" style={{ paddingBottom: '15px', marginLeft:'20px' }}>
//                                 <label className=''>
//                                     <input
//                                         type="radio"
//                                         name="size"
//                                         value="1 - 3"
//                                     /> L
//                                 </label>
//                                 <label className=''>
//                                     <input
//                                         type="radio"
//                                         name="size"
//                                         value="3 - 6"
//                                     /> M
//                                 </label>
//                                 <label className=''>
//                                     <input
//                                         type="radio"
//                                         name="size"
//                                         value="6 - 12"
//                                     /> XL
//                                 </label>
//                                 <label className=''>
//                                     <input
//                                         type="radio"
//                                         name="size"
//                                         value="6 - 12"
//                                     /> XXL
//                                 </label>
//                                 <br />
//                             </div>

//                             <div className="stockCounter d-inline ml-5">
//                                 <span className="btn btn-danger minus" onClick={decreaseQty} >-</span>

//                                 <input type="number" className="form-control count d-inline" value={quantity} readOnly />

//                                 <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
//                             </div>
//                             <button
//                                 type="button"
//                                 id="cart_btn"
//                                 disabled={product.stock === 0 || !user}
//                                 onClick={handleAddToCart}
//                                 className="btn btn-primary d-inline ml-4"
//                             >
//                                 Add to Cart
//                             </button>

//                             <hr />

//                             <p>Status: <span className={product.stock > 0 ? 'greenColor' : 'redColor'} id="stock_status">{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</span></p>

//                             <hr />

//                             <h4 className="mt-2 ml-5">Description:</h4>
//                             <p>{product.description}</p>
//                             <hr />
//                             <p id="product_seller mb-3 ml-5">Sold by: <strong>{product.seller}</strong></p>
//                             {user ?
//                                 <button onClick={handleShow} id="review_btn" type="button" className="btn btn-primary mt-4" data-toggle="modal" data-target="#ratingModal">
//                                     Submit Your Review
//                                 </button> :
//                                 <div className="alert alert-danger mt-5"> Login to Post Review</div>
//                             }

//                             <button
//                                 type="button"
//                                 id="wishlist_btn"
//                                 disabled={!user} // Disable if the user is not logged in
//                                 onClick={handleAddToWishlist}
//                                 className="btn d-inline ml-4"
//                             >
//                                 <span role="img" aria-label="Heart" className="heart-icon">❤️</span>
//                                 <span className="sr-only">Add to Wishlist</span>
//                             </button>

//                             <div className="row mt-2 mb-5 ml-5">
//                                 <div className="rating w-50">
//                                     <Modal show={show} onHide={handleClose}>
//                                         <Modal.Header closeButton>
//                                             <Modal.Title>Submit Review</Modal.Title>
//                                         </Modal.Header>
//                                         <Modal.Body>
//                                             <ul className="stars" >
//                                                 {
//                                                     [1, 2, 3, 4, 5].map(star => (
//                                                         <li
//                                                             value={star}
//                                                             onClick={() => setRating(star)}
//                                                             className={`star ${star <= rating ? 'orange' : ''}`}
//                                                             onMouseOver={(e) => e.target.classList.add('yellow')}
//                                                             onMouseOut={(e) => e.target.classList.remove('yellow')}

//                                                         ><i className="fa fa-star"></i></li>
//                                                     ))
//                                                 }


//                                             </ul>

//                                             <textarea onChange={(e) => setComment(e.target.value)} name="review" id="review" className="form-control mt-3">

//                                             </textarea>
//                                             <button disabled={loading} onClick={reviewHandler} aria-label="Close" className="btn my-3 float-right review-btn px-4 text-white">Submit</button>
//                                         </Modal.Body>

//                                     </Modal>
//                                 </div>
//                             </div>

//                         </div>

//                     </div>

//                     {
//                         product.reviews && product.reviews.length > 0 ?
//                             <ProductReview reviews={product.reviews} /> : null
//                     }
//                 </Fragment>}
//         </Fragment>
//     )
// }


// import { Fragment, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import { createReview, getProduct } from "../../actions/productActions";
// import Loader from '../layouts/Loader';
// import { Carousel } from 'react-bootstrap';
// import MetaData from "../layouts/MetaData";
// import { addCartItem } from "../../actions/cartActions";
// import { clearReviewSubmitted, clearError, clearProduct } from '../../slices/productSlice';
// import { Modal } from 'react-bootstrap';
// import { toast } from "react-toastify";
// import ProductReview from "./ProductReview";
// import { addToWishlist } from "../../actions/wishlistActions";

// export default function ProductDetail() {
//     const { loading, product = {}, isReviewSubmitted, error } = useSelector((state) => state.productState);
//     const { user } = useSelector(state => state.authState);
//     const dispatch = useDispatch();
//     const { id } = useParams();
//     const [quantity, setQuantity] = useState(1);
//     const navigate = useNavigate();

//     const [selectedSize, setSelectedSize] = useState(null);

//     //console.log(product.category);

//     const increaseQty = () => {
//         const count = document.querySelector('.count');
//         if (product.stock === 0 || count.valueAsNumber >= product.stock) return;
//         const qty = count.valueAsNumber + 1;
//         setQuantity(qty);
//     };
//     const decreaseQty = () => {
//         const count = document.querySelector('.count');
//         if (count.valueAsNumber === 1) return;
//         const qty = count.valueAsNumber - 1;
//         setQuantity(qty);
//     };

//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     const [rating, setRating] = useState(1);
//     const [comment, setComment] = useState("");

//     const reviewHandler = () => {
//         const formData = new FormData();
//         formData.append('rating', rating);
//         formData.append('comment', comment);
//         formData.append('productId', id);
//         dispatch(createReview(formData));
//     };

//     useEffect(() => {
//         if (isReviewSubmitted) {
//             handleClose();
//             toast('Review Submitted successfully', {
//                 type: 'success',
//                 position: toast.POSITION.BOTTOM_RIGHT,
//                 onOpen: () => dispatch(clearReviewSubmitted())
//             });
//         }
//         if (error) {
//             toast(error, {
//                 position: toast.POSITION.BOTTOM_RIGHT,
//                 type: 'error',
//                 onOpen: () => { dispatch(clearError()) }
//             });
//             return;
//         }
//         if (!product._id || isReviewSubmitted) {
//             dispatch(getProduct(id));
//         }

//         return () => {
//             dispatch(clearProduct());
//         };

//     }, [dispatch, id, isReviewSubmitted, error, product._id]);

//     const handleAddToCart = () => {
//         if (!user) {
//             navigate('/login');
//             return;
//         }
//         dispatch(addCartItem(product._id, quantity));
//         toast('Cart Item Added!', {
//             type: 'success',
//             position: toast.POSITION.BOTTOM_RIGHT,
//         });
//     };

    

//     const handleAddToWishlist = () => {
//         if (!user) {
//             navigate('/login');
//             return;
//         }
//         dispatch(addToWishlist(product._id));
//         toast('Product Added to Wishlist!', {
//             type: 'success',
//             position: toast.POSITION.BOTTOM_RIGHT,
//         });
//     };

//     return (
//         <Fragment>
//             {loading ? <Loader /> :
//                 <Fragment>
//                     <MetaData title={product.name} />
//                     <div className="row f-flex justify-content-around">
//                         <div className="col-12 col-lg-5 img-fluid" id="product_image">
//                             <Carousel pause="hover">
//                                 {product.images && product.images.length > 0 && product.images.map(image =>
//                                     <Carousel.Item key={image._id}>
//                                         <img className="d-block w-100" src={image.image} alt={product.name} height="500" width="500" />
//                                     </Carousel.Item>
//                                 )}
//                             </Carousel>
//                         </div>

//                         <div className="col-12 col-lg-5 mt-5 ml-5">
//                             <h3>{product.name}</h3>
//                             {/* <h1>{product.category}</h1> */}
//                             <p id="product_id">Product # {product._id}</p>

//                             <hr />

//                             <div className="rating-outer">
//                                 <div className="rating-inner" style={{ width: `${product.ratings / 5 * 100}%` }} ></div>
//                             </div>
//                             <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>

//                             <hr />

//                             <p className="price">
//                                 {product.offerPrice > 0 && (
//                                     <>
//                                         <span className="old-price">₹{product.price}</span>
//                                         <span className="offer-price"> Offer Price: ₹{product.offerPrice}</span>
//                                     </>
//                                 )}
//                                 {!product.offerPrice && <span className="price">₹{product.price}</span>}
//                             </p>

//                             {/* Conditional rendering for size selection */}
//                             <div className="d-flex justify-content-between" style={{ paddingBottom: '15px', marginLeft: '20px' }}>
//                                 {product.category === 'Kids' ? (
//                                     <>
//                                         <label>
//                                             <input type="radio" name="size" value="0-3" /> 0 - 3 yrs
//                                         </label>
//                                         <label>
//                                             <input type="radio" name="size" value="3-5" /> 3 - 5 yrs
//                                         </label>
//                                         <label>
//                                             <input type="radio" name="size" value="5-7" /> 5 - 7 yrs
//                                         </label>
//                                         <label>
//                                             <input type="radio" name="size" value="7-10" /> 7 - 10 yrs
//                                         </label>
//                                     </>
//                                 ) : (
//                                     <>
//                                         <label>
//                                             <input type="radio" name="size" value="L" /> L
//                                         </label>
//                                         <label>
//                                             <input type="radio" name="size" value="M" /> M
//                                         </label>
//                                         <label>
//                                             <input type="radio" name="size" value="XL" /> XL
//                                         </label>
//                                         <label>
//                                             <input type="radio" name="size" value="XXL" /> XXL
//                                         </label>
//                                     </>
//                                 )}
//                             </div>                            

//                             <div className="stockCounter d-inline ml-5">
//                                 <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>
//                                 <input type="number" className="form-control count d-inline" value={quantity} readOnly />
//                                 <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
//                             </div>
//                             <button
//                                 type="button"
//                                 id="cart_btn"
//                                 disabled={product.stock === 0 || !user}
//                                 onClick={handleAddToCart}
//                                 className="btn btn-primary d-inline ml-4"
//                             >
//                                 Add to Cart
//                             </button>

//                             <hr />

//                             <p>Status: <span className={product.stock > 0 ? 'greenColor' : 'redColor'} id="stock_status">{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</span></p>

//                             <hr />

//                             <h4 className="mt-2 ml-5">Description:</h4>
//                             <p>{product.description}</p>
//                             <hr />
//                             <p id="product_seller mb-3 ml-5">Sold by: <strong>{product.seller}</strong></p>
//                             {user ?
//                                 <button onClick={handleShow} id="review_btn" type="button" className="btn btn-primary mt-4" data-toggle="modal" data-target="#ratingModal">
//                                     Submit Your Review
//                                 </button> :
//                                 <div className="alert alert-danger mt-5"> Login to Post Review</div>
//                             }

//                             <button
//                                 type="button"
//                                 id="wishlist_btn"
//                                 disabled={!user}
//                                 onClick={handleAddToWishlist}
//                                 className="btn d-inline ml-4"
//                             >
//                                 <span role="img" aria-label="Heart" className="heart-icon">❤️</span>
//                                 <span className="sr-only">Add to Wishlist</span>
//                             </button>

//                             <div className="row mt-2 mb-5 ml-5">
//                                 <div className="rating w-50">
//                                     <Modal show={show} onHide={handleClose}>
//                                         <Modal.Header closeButton>
//                                             <Modal.Title>Submit Review</Modal.Title>
//                                         </Modal.Header>
//                                         <Modal.Body>
//                                             <ul className="stars">
//                                                 {
//                                                     [1, 2, 3, 4, 5].map(star => (
//                                                         <li
//                                                             value={star}
//                                                             onClick={() => setRating(star)}
//                                                             className={`star ${star <= rating ? 'orange' : ''}`}
//                                                             onMouseOver={(e) => e.target.classList.add('yellow')}
//                                                             onMouseOut={(e) => e.target.classList.remove('yellow')}
//                                                         ><i className="fa fa-star"></i></li>
//                                                     ))
//                                                 }
//                                             </ul>

//                                             <textarea onChange={(e) => setComment(e.target.value)} name="review" id="review" className="form-control mt-3"></textarea>
//                                             <button disabled={loading} onClick={reviewHandler} aria-label="Close" className="btn my-3 float-right review-btn px-4 text-white">Submit</button>
//                                         </Modal.Body>
//                                     </Modal>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>

//                     {product.reviews && product.reviews.length > 0 ? <ProductReview reviews={product.reviews} /> : null}
//                 </Fragment>}
//         </Fragment>
//     );
// }



// import { Fragment, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import { createReview, getProduct } from "../../actions/productActions";
// import Loader from '../layouts/Loader';
// import { Carousel } from 'react-bootstrap';
// import MetaData from "../layouts/MetaData";
// import { addCartItem } from "../../actions/cartActions";
// import { clearReviewSubmitted, clearError, clearProduct } from '../../slices/productSlice';
// import { Modal } from 'react-bootstrap';
// import { toast } from "react-toastify";
// import ProductReview from "./ProductReview";
// import { addToWishlist } from "../../actions/wishlistActions";

// export default function ProductDetail() {
//     const { loading, product = {}, isReviewSubmitted, error } = useSelector((state) => state.productState);
//     const { user } = useSelector(state => state.authState);
//     const dispatch = useDispatch();
//     const { id } = useParams();
//     const [quantity, setQuantity] = useState(1);
//     const navigate = useNavigate();

//     const [selectedSize, setSelectedSize] = useState(null);

//     //console.log(product.category);

//     const increaseQty = () => {
//         const count = document.querySelector('.count');
//         if (product.stock === 0 || count.valueAsNumber >= product.stock) return;
//         const qty = count.valueAsNumber + 1;
//         setQuantity(qty);
//     };
//     const decreaseQty = () => {
//         const count = document.querySelector('.count');
//         if (count.valueAsNumber === 1) return;
//         const qty = count.valueAsNumber - 1;
//         setQuantity(qty);
//     };

//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     const [rating, setRating] = useState(1);
//     const [comment, setComment] = useState("");

//     const reviewHandler = () => {
//         const formData = new FormData();
//         formData.append('rating', rating);
//         formData.append('comment', comment);
//         formData.append('productId', id);
//         dispatch(createReview(formData));
//     };

//     useEffect(() => {
//         if (isReviewSubmitted) {
//             handleClose();
//             toast('Review Submitted successfully', {
//                 type: 'success',
//                 position: toast.POSITION.BOTTOM_RIGHT,
//                 onOpen: () => dispatch(clearReviewSubmitted())
//             });
//         }
//         if (error) {
//             toast(error, {
//                 position: toast.POSITION.BOTTOM_RIGHT,
//                 type: 'error',
//                 onOpen: () => { dispatch(clearError()) }
//             });
//             return;
//         }
//         if (!product._id || isReviewSubmitted) {
//             dispatch(getProduct(id));
//         }

//         return () => {
//             dispatch(clearProduct());
//         };

//     }, [dispatch, id, isReviewSubmitted, error, product._id]);


//     const handleAddToCart = () => {
//         if (!user) {
//             navigate('/login');
//             return;
//         }
//         if (!selectedSize) {
//             toast('Please select a size before adding to the cart', {
//                 type: 'error',
//                 position: toast.POSITION.BOTTOM_RIGHT,
//             });
//             return;
//         }
//         dispatch(addCartItem(product._id, quantity));
//         toast('Cart Item Added!', {
//             type: 'success',
//             position: toast.POSITION.BOTTOM_RIGHT,
//         });
//     };

    

//     const handleAddToWishlist = () => {
//         if (!user) {
//             navigate('/login');
//             return;
//         }
//         dispatch(addToWishlist(product._id));
//         toast('Product Added to Wishlist!', {
//             type: 'success',
//             position: toast.POSITION.BOTTOM_RIGHT,
//         });
//     };

//     return (
//         <Fragment>
//             {loading ? <Loader /> :
//                 <Fragment>
//                     <MetaData title={product.name} />
//                     <div className="row f-flex justify-content-around">
//                         <div className="col-12 col-lg-5 img-fluid" id="product_image">
//                             <Carousel pause="hover">
//                                 {product.images && product.images.length > 0 && product.images.map(image =>
//                                     <Carousel.Item key={image._id}>
//                                         <img className="d-block w-100" src={image.image} alt={product.name} height="500" width="500" />
//                                     </Carousel.Item>
//                                 )}
//                             </Carousel>
//                         </div>

//                         <div className="col-12 col-lg-5 mt-5 ml-5">
//                             <h3>{product.name}</h3>
//                             {/* <h1>{product.category}</h1> */}
//                             <p id="product_id">Product # {product._id}</p>

//                             <hr />

//                             <div className="rating-outer">
//                                 <div className="rating-inner" style={{ width: `${product.ratings / 5 * 100}%` }} ></div>
//                             </div>
//                             <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>

//                             <hr />

//                             <p className="price">
//                                 {product.offerPrice > 0 && (
//                                     <>
//                                         <span className="old-price">₹{product.price}</span>
//                                         <span className="offer-price"> Offer Price: ₹{product.offerPrice}</span>
//                                     </>
//                                 )}
//                                 {!product.offerPrice && <span className="price">₹{product.price}</span>}
//                             </p>

//                             {/* Conditional rendering for size selection */}                            

// <div className="d-flex justify-content-between" style={{ paddingBottom: '15px', marginLeft: '20px' }}>
//                                 {product.category === 'Kids' ? (
//                                     ['0-3', '3-5', '5-7', '7-10'].map(size => (
//                                         <label key={size}>
//                                             <input
//                                                 type="radio"
//                                                 name="size"
//                                                 value={size}
//                                                 onChange={() => setSelectedSize(size)} // Set the selected size
//                                             /> {size} yrs
//                                         </label>
//                                     ))
//                                 ) : (
//                                     ['L', 'M', 'XL', 'XXL'].map(size => (
//                                         <label key={size}>
//                                             <input
//                                                 type="radio"
//                                                 name="size"
//                                                 value={size}
//                                                 onChange={() => setSelectedSize(size)} // Set the selected size
//                                             /> {size}
//                                         </label>
//                                     ))
//                                 )}
//                             </div>

//                             <div className="stockCounter d-inline ml-5">
//                                 <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>
//                                 <input type="number" className="form-control count d-inline" value={quantity} readOnly />
//                                 <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
//                             </div>
//                             <button
//                                 type="button"
//                                 id="cart_btn"
//                                 disabled={product.stock === 0 || !user}
//                                 onClick={handleAddToCart}
//                                 className="btn btn-primary d-inline ml-4"
//                             >
//                                 Add to Cart
//                             </button>

//                             <hr />

//                             <p>Status: <span className={product.stock > 0 ? 'greenColor' : 'redColor'} id="stock_status">{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</span></p>

//                             <hr />

//                             <h4 className="mt-2 ml-5">Description:</h4>
//                             <p>{product.description}</p>
//                             <hr />
//                             <p id="product_seller mb-3 ml-5">Sold by: <strong>{product.seller}</strong></p>
//                             {user ?
//                                 <button onClick={handleShow} id="review_btn" type="button" className="btn btn-primary mt-4" data-toggle="modal" data-target="#ratingModal">
//                                     Submit Your Review
//                                 </button> :
//                                 <div className="alert alert-danger mt-5"> Login to Post Review</div>
//                             }

//                             <button
//                                 type="button"
//                                 id="wishlist_btn"
//                                 disabled={!user}
//                                 onClick={handleAddToWishlist}
//                                 className="btn d-inline ml-4"
//                             >
//                                 <span role="img" aria-label="Heart" className="heart-icon">❤️</span>
//                                 <span className="sr-only">Add to Wishlist</span>
//                             </button>

//                             <div className="row mt-2 mb-5 ml-5">
//                                 <div className="rating w-50">
//                                     <Modal show={show} onHide={handleClose}>
//                                         <Modal.Header closeButton>
//                                             <Modal.Title>Submit Review</Modal.Title>
//                                         </Modal.Header>
//                                         <Modal.Body>
//                                             <ul className="stars">
//                                                 {
//                                                     [1, 2, 3, 4, 5].map(star => (
//                                                         <li
//                                                             value={star}
//                                                             onClick={() => setRating(star)}
//                                                             className={`star ${star <= rating ? 'orange' : ''}`}
//                                                             onMouseOver={(e) => e.target.classList.add('yellow')}
//                                                             onMouseOut={(e) => e.target.classList.remove('yellow')}
//                                                         ><i className="fa fa-star"></i></li>
//                                                     ))
//                                                 }
//                                             </ul>

//                                             <textarea onChange={(e) => setComment(e.target.value)} name="review" id="review" className="form-control mt-3"></textarea>
//                                             <button disabled={loading} onClick={reviewHandler} aria-label="Close" className="btn my-3 float-right review-btn px-4 text-white">Submit</button>
//                                         </Modal.Body>
//                                     </Modal>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>

//                     {product.reviews && product.reviews.length > 0 ? <ProductReview reviews={product.reviews} /> : null}
//                 </Fragment>}
//         </Fragment>
//     );
// }

import { Fragment, useEffect, useState } from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createReview, getProduct } from "../../actions/productActions";
import Loader from '../layouts/Loader';
import { Carousel } from 'react-bootstrap';
import MetaData from "../layouts/MetaData";
import { addCartItem } from "../../actions/cartActions";
import { clearReviewSubmitted, clearError, clearProduct } from '../../slices/productSlice';
import { Modal } from 'react-bootstrap';
import { toast } from "react-toastify";
import ProductReview from "./ProductReview";
import { addToWishlist } from "../../actions/wishlistActions";

export default function ProductDetail() {
    const { loading, product = {}, isReviewSubmitted, error } = useSelector((state) => state.productState);
    const { user } = useSelector(state => state.authState);
    const dispatch = useDispatch();
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    const [selectedSize, setSelectedSize] = useState(null);
    const [show, setShow] = useState(false);
    const [rating, setRating] = useState(1);
    const [comment, setComment] = useState("");

    const increaseQty = () => {
        if (product.stock === 0 || quantity >= product.stock) return;
        setQuantity(q => q + 1);
    };

    const decreaseQty = () => {
        if (quantity === 1) return;
        setQuantity(q => q - 1);
    };

    const reviewHandler = () => {
        const formData = new FormData();
        formData.append('rating', rating);
        formData.append('comment', comment);
        formData.append('productId', id);
        dispatch(createReview(formData));
    };

    useEffect(() => {
        if (isReviewSubmitted) {
            setShow(false);
            toast('Review Submitted successfully', {
                type: 'success',
                position: toast.POSITION.BOTTOM_RIGHT,
                onOpen: () => dispatch(clearReviewSubmitted())
            });
        }
        if (error) {
            toast(error, {
                position: toast.POSITION.BOTTOM_RIGHT,
                type: 'error',
                onOpen: () => { dispatch(clearError()) }
            });
            return;
        }
        if (!product._id || isReviewSubmitted) {
            dispatch(getProduct(id));
        }
        return () => {
            dispatch(clearProduct());
        };
    }, [dispatch, id, isReviewSubmitted, error, product._id]);

    const handleAddToCart = () => {
        if (!user) {
            navigate('/login');
            return;
        }
        if (!selectedSize) {
            toast('Please select a size before adding to the cart', {
                type: 'error',
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return;
        }
        dispatch(addCartItem(product._id, quantity));
        toast('Cart Item Added!', {
            type: 'success',
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    };

    const handleAddToWishlist = () => {
        if (!user) {
            navigate('/login');
            return;
        }
        dispatch(addToWishlist(product._id));
        toast('Product Added to Wishlist!', {
            type: 'success',
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    };

    return (
        <Fragment>
            {loading ? <Loader /> :
                <Fragment>
                    <MetaData title={product.name} />
                    <div className="row d-flex justify-content-between my-4">
                        <div className="col-12 col-lg-5">
                            <h3 className="font-weight-bold">{product.name}</h3>
                            <p id="product_id" className="text-muted">Product # {product._id}</p>
                            <hr />
                            <div className="rating-outer">
                                <div className="rating-inner" style={{ width: `${(product.ratings / 5) * 100}%` }}></div>
                            </div>
                            <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>
                            <hr />

                            <p className="price">
                                {product.offerPrice > 0 ? (
                                    <>
                                        <span className="old-price">₹{product.price}</span>
                                        <span className="offer-price"> ₹{product.offerPrice}</span>
                                    </>
                                ) : (
                                    <span className="price">₹{product.price}</span>
                                )}
                            </p>

                            <div className="d-flex justify-content-between mb-3">
                                {product.category === 'Kids' ? (
                                    ['0-3', '3-5', '5-7', '7-10'].map(size => (
                                        <label key={size} className="mr-3">
                                            <input
                                                type="radio"
                                                name="size"
                                                value={size}
                                                onChange={() => setSelectedSize(size)}
                                            /> {size} yrs
                                        </label>
                                    ))
                                ) : (
                                    ['L', 'M', 'XL', 'XXL'].map(size => (
                                        <label key={size} className="mr-3">
                                            <input
                                                type="radio"
                                                name="size"
                                                value={size}
                                                onChange={() => setSelectedSize(size)}
                                            /> {size}
                                        </label>
                                    ))
                                )}
                            </div>

                            <div className="d-flex align-items-center mb-3">
                                <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>
                                <input type="number" className="form-control count mx-2" value={quantity} readOnly />
                                <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
                            </div>
                            <button
                                type="button"
                                id="cart_btn"
                                disabled={product.stock === 0 || !user}
                                onClick={handleAddToCart}
                                className="btn btn-primary mt-2"
                            >
                                Add to Cart
                            </button>

                            <hr />
                            <p>Status: <span className={product.stock > 0 ? 'text-success' : 'text-danger'}>{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</span></p>
                            <hr />

                            <h4>Description:</h4>
                            <p>{product.description}</p>
                            <hr />
                            <p className="mb-3">Sold by: <strong>{product.seller}</strong></p>

                            {user ? (
                                <button onClick={() => setShow(true)} id="review_btn" className="btn btn-primary mt-2">
                                    Submit Your Review
                                </button>
                            ) : (
                                <div className="alert alert-danger mt-3">Login to Post Review</div>
                            )}

                            <button
                                type="button"
                                id="wishlist_btn"
                                disabled={!user}
                                onClick={handleAddToWishlist}
                                className="btn btn-outline-danger mt-2 ml-2"
                            >
                                <span role="img" aria-label="Heart" className="heart-icon">❤️</span>
                            </button>

                            <Modal show={show} onHide={() => setShow(false)}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Submit Review</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <ul className="stars">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <li
                                                key={star}
                                                onClick={() => setRating(star)}
                                                className={`star ${star <= rating ? 'orange' : ''}`}
                                                onMouseOver={(e) => e.target.classList.add('yellow')}
                                                onMouseOut={(e) => e.target.classList.remove('yellow')}
                                            >
                                                <i className="fa fa-star"></i>
                                            </li>
                                        ))}
                                    </ul>
                                    <textarea onChange={(e) => setComment(e.target.value)} name="review" className="form-control mt-3" placeholder="Write your review..."></textarea>
                                    <button disabled={loading} onClick={reviewHandler} className="btn my-3 float-right btn-primary">Submit</button>
                                </Modal.Body>
                            </Modal>
                        </div>

                        <div className="col-12 col-lg-5">
                            <Carousel pause="hover">
                                {product.images && product.images.length > 0 && product.images.map(image =>
                                    <Carousel.Item key={image._id}>
                                        <img className="d-block w-100" src={image.image} alt={product.name} height="500" />
                                    </Carousel.Item>
                                )}
                            </Carousel>
                        </div>
                    </div>

                    {product.reviews && product.reviews.length > 0 && <ProductReview reviews={product.reviews} />}
                </Fragment>
            }
        </Fragment>
    );
}



/* ================= Without Redux ================ */

// import { Fragment, useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { Carousel, Modal } from 'react-bootstrap';
// import { toast } from "react-toastify";
// import Loader from '../layouts/Loader';
// import MetaData from '../layouts/MetaData';
// import ProductReview from "./ProductReview";
// import './ProductDetails.css';
// import { useSelector } from "react-redux";

// export default function ProductDetail() {
//     const { user } = useSelector(state => state.authState);
//     // const [product, setProduct] = useState({});
//     const [product, setProduct] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [isReviewSubmitted, setIsReviewSubmitted] = useState(false);
//     const [error, setError] = useState('');
//     const [quantity, setQuantity] = useState(1);
//     const [show, setShow] = useState(false);
//     const [rating, setRating] = useState(1);
//     const [comment, setComment] = useState("");
//     const { id } = useParams();
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Fetch product details using id
//         const fetchProduct = async () => {
//             try {
//                 const response = await fetch(`/api/products/${id}`);
//                 const data = await response.json();
//                 setProduct(data);
//                 setLoading(false);
//             } catch (error) {
//                 setError("Error fetching product details");
//                 setLoading(false);
//             }
//         };

//         fetchProduct();
//     }, [id]);

//     const increaseQty = () => {
//         if (product.stock === 0 || quantity >= product.stock) return;
//         setQuantity(prevQty => prevQty + 1);
//     };

//     const decreaseQty = () => {
//         if (quantity === 1) return;
//         setQuantity(prevQty => prevQty - 1);
//     };

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     const reviewHandler = async () => {
//         try {
//             const response = await fetch(`/api/reviews`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     rating,
//                     comment,
//                     productId: id,
//                 }),
//             });

//             if (!response.ok) throw new Error('Review submission failed');

//             setIsReviewSubmitted(true);
//             handleClose();
//             toast('Review Submitted successfully', {
//                 type: 'success',
//                 position: toast.POSITION.BOTTOM_RIGHT,
//             });
//         } catch (err) {
//             toast('Error submitting review', {
//                 type: 'error',
//                 position: toast.POSITION.BOTTOM_RIGHT,
//             });
//         }
//     };

//     const handleAddToCart = () => {
//         if (!user) {
//             navigate('/login');
//             return;
//         }

//         // Handle add to cart logic
//         toast('Cart Item Added!', {
//             type: 'success',
//             position: toast.POSITION.BOTTOM_RIGHT,
//         });
//     };

//     const handleAddToWishlist = () => {
//         if (!user) {
//             navigate('/login');
//             return;
//         }

//         // Handle add to wishlist logic
//         toast('Product Added to Wishlist!', {
//             type: 'success',
//             position: toast.POSITION.BOTTOM_RIGHT,
//         });
//     };

    


//     return (
//                     <Fragment>
//                         {loading ? <Loader /> :
//                             <Fragment>
//                                 <MetaData title={product.name} />
//                                 <div className="product-details-container">
//                                     <div className="product-image-section">
//                                         <Carousel pause="hover">
//                                             {product.images && product.images.length > 0 && product.images.map(image =>
//                                                 <Carousel.Item key={image._id}>
//                                                     <img className="product-image" src={image.image} alt={product.name} />
//                                                 </Carousel.Item>
//                                             )}
//                                         </Carousel>
//                                     </div>
            
//                                     <div className="product-info-section">
//                                         <h3 className="product-name">{product.name}</h3>
//                                         <p className="product-id">Product # {product._id}</p>
            
//                                         <div className="product-rating">
//                                             <div className="rating-outer">
//                                                 <div className="rating-inner" style={{ width: `${product.ratings / 5 * 100}%` }}></div>
//                                             </div>
//                                             <span className="no-of-reviews">({product.numOfReviews} Reviews)</span>
//                                         </div>
            
//                                         <div className="product-price">
//                                             {product.offerPrice > 0 ? (
//                                                 <>
//                                                     <span className="old-price">₹{product.price}</span>
//                                                     <span className="offer-price"> Offer Price: ₹{product.offerPrice}</span>
//                                                 </>
//                                             ) : (
//                                                 <span className="price">₹{product.price}</span>
//                                             )}
//                                         </div>
            
//                                         <div className="product-sizes">
//                                             <label>
//                                                 <input type="radio" name="size" value="1 - 3" /> 1 - 3yrs
//                                             </label>
//                                             <label>
//                                                 <input type="radio" name="size" value="3 - 6" /> 3 - 6yrs
//                                             </label>
//                                             <label>
//                                                 <input type="radio" name="size" value="6 - 12" /> 6 - 12yrs
//                                             </label>
//                                         </div>
            
//                                         <div className="stock-counter">
//                                             <button className="btn-minus" onClick={decreaseQty}>-</button>
//                                             <input type="number" className="quantity-input" value={quantity} readOnly />
//                                             <button className="btn-plus" onClick={increaseQty}>+</button>
//                                         </div>
            
//                                         <button
//                                             type="button"
//                                             className="btn-add-to-cart"
//                                             disabled={product.stock === 0 || !user}
//                                             onClick={handleAddToCart}
//                                         >
//                                             Add to Cart
//                                         </button>
            
//                                         <p className="product-status">
//                                             Status: <span className={product.stock > 0 ? 'in-stock' : 'out-of-stock'}>{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</span>
//                                         </p>
            
//                                         <h4 className="description-title">Description:</h4>
//                                         <p className="product-description">{product.description}</p>
            
//                                         <p className="product-seller">Sold by: <strong>{product.seller}</strong></p>
            
//                                         {user ? (
//                                             <button onClick={handleShow} className="btn-submit-review" data-toggle="modal" data-target="#ratingModal" style={{marginRight:'10px'}}>
//                                                 Submit Your Review
//                                             </button>
//                                         ) : (
//                                             <div className="alert-login">Login to Post Review</div>
//                                         )}
            
//                                         <button
//                                             type="button"
//                                             className="btn-wishlist"
//                                             disabled={!user}
//                                             onClick={handleAddToWishlist}
//                                         >
//                                             ❤️ Add to Wishlist
//                                         </button>
            
//                                         <Modal show={show} onHide={handleClose}>
//                                             <Modal.Header closeButton>
//                                                 <Modal.Title>Submit Review</Modal.Title>
//                                             </Modal.Header>
//                                             <Modal.Body>
//                                                 <ul className="stars">
//                                                     {[1, 2, 3, 4, 5].map(star => (
//                                                         <li
//                                                             key={star}
//                                                             value={star}
//                                                             onClick={() => setRating(star)}
//                                                             className={`star ${star <= rating ? 'orange' : ''}`}
//                                                             onMouseOver={(e) => e.target.classList.add('yellow')}
//                                                             onMouseOut={(e) => e.target.classList.remove('yellow')}
//                                                         >
//                                                             <i className="fa fa-star"></i>
//                                                         </li>
//                                                     ))}
//                                                 </ul>
            
//                                                 <textarea onChange={(e) => setComment(e.target.value)} name="review" id="review" className="review-textarea"></textarea>
//                                                 <button disabled={loading} onClick={reviewHandler} className="btn-submit-review-modal">Submit</button>
//                                             </Modal.Body>
//                                         </Modal>
            
//                                     </div>
//                                 </div>
            
//                                 {product.reviews && product.reviews.length > 0 && (
//                                     <ProductReview reviews={product.reviews} />
//                                 )}
//                             </Fragment>
//                         }
//                     </Fragment>
//                 );
// }

