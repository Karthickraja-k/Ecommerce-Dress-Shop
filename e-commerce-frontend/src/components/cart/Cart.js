// import { Fragment } from 'react'
// import {useDispatch, useSelector} from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import { decreaseCartItemQty, increaseCartItemQty,removeItemFromCart } from '../../slices/cartSlice';
// import axios from 'axios';

// export default function Cart() {
//     const {items } = useSelector(state => state.cartState)
//     // =============== newly added user state for send email in check out handler  ================
//     //const {user } = useSelector(state => state.userState)
//     const user  = localStorage.getItem('user');
//     // =============== newly added user state for send email in check out handler  ================
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     //console.log(user)

//     console.log(items)

//     const increaseQty = (item) => {
//         const count = item.quantity;
//         if(item.stock === 0 ||  count >= item.stock) return;
//         dispatch(increaseCartItemQty(item.product))
//     }
//     const decreaseQty = (item) => {
//         const count = item.quantity;
//         if(count === 1) return;
//         dispatch(decreaseCartItemQty(item.product))
//     }

//     const checkoutHandler = () =>{

        
//         const cartTotal = items.reduce((acc, item) => (acc + item.quantity * item.price), 0);

//         if (cartTotal >= 1500) {
//             // Make a call to the backend to notify the admin
//             // Replace 'http://your-backend-url/' with the actual URL of your backend server
//             axios.post('https://ontots2.onrender.com/api/v1/mail',  {cartTotal},
//             {
//                 headers: {
//                     Authorization: localStorage.getItem('token')
//                 } })
//                 .then(() => {
//                     console.log('Admin notified about a purchase over rupees 500.');
//                 })
//                 .catch((error) => {
//                     console.error('Error notifying admin:', error);
//                 });
//         }

//         navigate('/login?redirect=shipping')
//     }    


//     return (
//         <Fragment>
//             {items.length === 0 ? 
//                 <h2 className="mt-5">Your Cart is Empty</h2> :
//                 <Fragment>
//                      <h2 className="mt-5">Your Cart: <b>{items.length} items</b></h2>
//                     <div className="row d-flex justify-content-between">
//                         <div className="col-12 col-lg-8">
//                             {items.map(item => (
//                                 <Fragment key={item.product}>
//                                     <hr />
//                                     <div className="cart-item">
//                                         <div className="row">
//                                             <div className="col-4 col-lg-3">
//                                                 <img src={item.image} alt={item.name} height="90" width="115"/>
//                                             </div>

//                                             <div className="col-5 col-lg-3">
//                                                 <Link to={`/product/${item.product}`}>{item.name}</Link>
//                                             </div>


//                                             <div className="col-4 col-lg-2 mt-4 mt-lg-0">
//                                                 <p id="card_item_price">₹{item.price}</p>
//                                             </div>

//                                             <div className="col-4 col-lg-3 mt-4 mt-lg-0">
//                                                 <div className="stockCounter d-inline">
//                                                     <span className="btn btn-danger minus" onClick={() => decreaseQty(item)}>-</span>
//                                                     <input type="number" className="form-control count d-inline" value={item.quantity} readOnly />

//                                                     <span className="btn btn-primary plus" onClick={() => increaseQty(item)}>+</span>
//                                                 </div>
//                                             </div>

//                                             <div className="col-4 col-lg-1 mt-4 mt-lg-0">
//                                                 <i id="delete_cart_item" onClick={() => dispatch(removeItemFromCart(item.product))} className="fa fa-trash btn btn-danger"></i>
//                                             </div>

//                                         </div>
//                                     </div>
//                                 </Fragment>
//                                 )
//                             )
//                             }

                         
//                             <hr />
//                         </div>

//                         <div className="col-12 col-lg-3 my-4">
//                             <div id="order_summary">
//                                 <h4>Order Summary</h4>
//                                 <hr />
//                                 <p>Subtotal:  <span className="order-summary-values">{items.reduce((acc, item)=>(acc + item.quantity), 0)} (Units)</span></p>
//                                 <p>Est. total: <span className="order-summary-values">{items.reduce((acc, item)=>(acc + item.quantity * item.price), 0)}</span></p>
                
//                                 <hr />
//                                 <button id="checkout_btn" onClick={checkoutHandler} className="btn btn-primary btn-block">Check out</button>
//                             </div>
//                         </div>
//                     </div>
//                 </Fragment>
//             }
           
//         </Fragment>
//     )
// }

import { Fragment } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { decreaseCartItemQty, increaseCartItemQty,removeItemFromCart } from '../../slices/cartSlice';
import axios from 'axios';

export default function Cart() {
    const {items } = useSelector(state => state.cartState)
    /* =============== newly added user state for send email in check out handler  ================ */
    //const {user } = useSelector(state => state.userState)
    const user  = localStorage.getItem('user');
    /* =============== newly added user state for send email in check out handler  ================ */
    const dispatch = useDispatch();
    const navigate = useNavigate();



   console.log(items)

    const increaseQty = (item) => {
        const count = item.quantity;
        if(item.stock === 0 ||  count >= item.stock) return;
        dispatch(increaseCartItemQty(item.product))
    }
    const decreaseQty = (item) => {
        const count = item.quantity;
        if(count === 1) return;
        dispatch(decreaseCartItemQty(item.product))
    }

    const checkoutHandler = () =>{

        
        const cartTotal = items.reduce((acc, item) => (acc + item.quantity * item.price), 0);

        if (cartTotal >= 500) {
            // Make a call to the backend to notify the admin
            // Replace 'http://your-backend-url/' with the actual URL of your backend server
            axios.post('http://127.0.0.1:8000/api/v1/mail',  {cartTotal},
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                } })
                .then(() => {
                    console.log('Admin notified about a purchase over rupees 500.');
                })
                .catch((error) => {
                    console.error('Error notifying admin:', error);
                });
        }

        navigate('/login?redirect=shipping')
    }    


    return (
        <Fragment>
            {items.length === 0 ? 
                <h2 className="mt-5">Your Cart is Empty</h2> :
                <Fragment>
                     <h2 className="mt-5">Your Cart: <b>{items.length} items</b></h2>
                    <div className="row d-flex justify-content-between">
                        <div className="col-12 col-lg-8">
                            {items.map(item => (
                                <Fragment key={item.product}>
                                    <hr />
                                    <div className="cart-item">
                                        <div className="row">
                                            <div className="col-3 col-lg-3">
                                                <img src={item.image} alt={item.name} height="90" width="115"/>
                                            </div>

                                            <div >
                                                <Link to={`/product/${item.product}`}>{item.name}</Link>
                                            </div>  

                                            <div className='col-lg-2 ml-4' >
                                            <p>{item.size}</p>
                                                </div>                                        


                                            <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                                <p id="card_item_price">₹{item.offerPrice ? item.offerPrice : item.price}</p>
                                            </div>

                                            <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                                <div className="stockCounter d-inline">
                                                    <span className="btn btn-danger minus" onClick={() => decreaseQty(item)}>-</span>
                                                    <input type="number" className="form-control count d-inline" value={item.quantity} readOnly />

                                                    <span className="btn btn-primary plus" onClick={() => increaseQty(item)}>+</span>
                                                </div>
                                            </div>

                                            <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                                                <i id="delete_cart_item" onClick={() => dispatch(removeItemFromCart(item.product))} className="fa fa-trash btn btn-danger"></i>
                                            </div>

                                        </div>
                                    </div>
                                </Fragment>
                                )
                            )
                            }

                         
                            <hr />
                        </div>

                        <div className="col-12 col-lg-3 my-4">
                            <div id="order_summary">
                                <h4>Order Summary</h4>
                                <hr />
                                <p>Subtotal:  <span className="order-summary-values">{items.reduce((acc, item)=>(acc + item.quantity), 0)} (Units)</span></p>
                                {/* <p>Est. total: <span className="order-summary-values">{items.reduce((acc, item)=>(acc + item.quantity * item.price), 0)}</span></p> */}
                                <p>Est. total: <span className="order-summary-values">₹{items.reduce((acc, item) => (acc + item.quantity * (item.offerPrice || item.price)), 0)}</span></p>
                                <hr />
                                <button id="checkout_btn" onClick={checkoutHandler} className="btn btn-primary btn-block">Check out</button>
                            </div>
                        </div>
                    </div>
                </Fragment>
            }
           
        </Fragment>
    )

}





//₹{item.offerPrice ? item.offerPrice : item.price}
    

