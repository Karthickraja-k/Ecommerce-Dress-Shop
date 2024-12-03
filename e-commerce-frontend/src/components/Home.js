// import { Fragment, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../actions/productActions";
// import Loader from "./layouts/Loader";
// import MetaData from "./layouts/MetaData";
// import Product from "./product/Product";
// import { toast } from 'react-toastify';
// import Pagination from 'react-js-pagination';
// import OfferAd from "./adds/OfferAd";
// //import './OfferAd.css'



// export default function Home() {
//     const dispatch = useDispatch();
//     const { products, loading, error, productsCount, resPerPage } = useSelector((state) => state.productsState)
//     const { isAuthenticated } = useSelector((state) => state.authState); // Assuming you have authentication information in your Redux state
//     const [currentPage, setCurrentPage] = useState(1);
    

//     const setCurrentPageNo = (pageNo) => {
//         setCurrentPage(pageNo)
//     }

//     let showHeader = false;

//     const handleLoginClick = () => {
//         showHeader(true);
//     }

//     useEffect(() => {
//         if (error) {
//             return toast.error(error, {
//                 position: toast.POSITION.BOTTOM_CENTER
//             })
//         }

//         // Only fetch products if the user is logged in
//         if (isAuthenticated) {
//             dispatch(getProducts(null, null, null, null, currentPage))
//         }
//     }, [error, dispatch, currentPage, isAuthenticated])

//     return (
//         <Fragment>
//             {loading ? <Loader /> :
//                 <Fragment>
//                     <MetaData title={'Buy Best Products'} />
                   
//                     <section id="products" className="container mt-5 mb-2">
                     
//                         {isAuthenticated ? (
//                             <>
//                             <OfferAd />                                                      
//                             <div className="row">                                                         
//                                  {products && products.map(product => (                                    
//                                     <Product col={4} key={product._id}  product={product} />                                                                       
//                                 ))} 
//                             </div>
//                             </>                            
//                         ) : (
//                             <div className='container-fluid px-0'>

//                             <div className="home-front-page">
                            
                                
//                                 <div style={{ paddingBottom: "60px" }}>
//                                     <div className=''>
//                                         <div className='text-center border-bottom'>
//                                             <h1 className="title " style={{ fontSize: "60px", height: "40px", marginBottom:'30px' }}>Oom Shri Traders</h1>
//                                             <p style={{ fontSize: "20px", padding: '10px' }}>Style of World!</p>
//                                         </div>
//                                         <div className='container'>
//                                              <div className='row mt-5'>                                                
//                                                 <div className='text-center'>
//                                                     <h4 className='col-lg-12 col-md-12   fw-bold pt-5 px-lg-5 lh-lg'>"Welcome to <span style={{color:'blue'}}>Oom Shri Trades</span> - Where Style Meets Comfort for Little Ones! Discover our exclusive dress shop specializing in high-quality muslin and cotton outfits for Kids and Mens. Founded by passionate entrepreneurs, <span style={{color:'blue'}}>Oom Shri Traders</span> is your go-to destination for adorable and fashion-forward clothing, ensuring your little gentlemen look and feel their best. Explore our collection today and dress your kids in comfort and style!"
//                                                     </h4>
//                                                 </div>
//                                             </div> 
//                                         </div>
//                                     </div>
//                                     <div className='text-center text-success'>
//                                         <a href='/login'onClick={handleLoginClick}>
//                                             <h3 className='mt-2 fw-bold underline-on-hover'>
//                                                 Visit Store?
//                                             </h3>
//                                         </a>
//                                     </div>
//                                 </div>
                                 
//                                  <div className='vh-50 container-fluid' style={{background:'primary', width:'100%'}}>
//                                     <div className='container py-3'>
//                                         <div className='row'>
                                            
//                                         </div>
//                                     </div>
//                                 </div>
//                              </div> 
//                              </div>
//                         )}
//                     </section>                    
//                     {isAuthenticated && productsCount > 0 && productsCount > resPerPage ?
//                         <div className="d-flex justify-content-center mt-5">
//                             <Pagination
//                                 activePage={currentPage}
//                                 onChange={setCurrentPageNo}
//                                 totalItemsCount={productsCount}
//                                 itemsCountPerPage={resPerPage}
//                                 nextPageText={'Next'}
//                                 firstPageText={'First'}
//                                 lastPageText={'Last'}
//                                 itemClass={'page-item'}
//                                 linkClass={'page-link'}
//                             />
//                         </div> : null}
//                 </Fragment>
//             }
//         </Fragment>
//     )
    
// }


import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import Loader from "./layouts/Loader";
import MetaData from "./layouts/MetaData";
import Product from "./product/Product";
import { toast } from 'react-toastify';
import Pagination from 'react-js-pagination';
import OfferAd from "./adds/OfferAd";
//import './Home.css'; // Add your styles here

export default function Home() {
    const dispatch = useDispatch();
    const { products, loading, error, productsCount, resPerPage } = useSelector((state) => state.productsState);
    const { isAuthenticated } = useSelector((state) => state.authState);
    const [currentPage, setCurrentPage] = useState(1);

    const setCurrentPageNo = (pageNo) => {
        setCurrentPage(pageNo);
    }

    useEffect(() => {
        if (error) {
            toast.error(error, {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }

        if (isAuthenticated) {
            dispatch(getProducts(null, null, null, null, currentPage));
        }
    }, [error, dispatch, currentPage, isAuthenticated]);

    return (
        <Fragment>
            {loading ? <Loader /> :
                <Fragment>
                    <MetaData title={'Buy Best Products'} />
                    <section id="products" className="container mt-5 mb-2">
                        {isAuthenticated ? (
                            <>
                                <OfferAd />
                                <div className="row">
                                    {products && products.map(product => (
                                        <Product col={4} key={product._id} product={product} />
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className='container-fluid px-0'>
                                <div className='text-center border-bottom'>
                                            <h1 className="title" style={{ fontSize: "60px", height: "40px", marginBottom: '30px' }}>Oom Shri Traders</h1>
                                            <p style={{ fontSize: "20px", padding: '10px' }}>Style of World!</p>
                                        </div>
                                <div style={{ flex: 1 }}>
                                        <img src="https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/fi/art/img121000x562-58d8517ba7.jpg" alt="Decorative" style={{ width: '100%', height: '100%' }} />
                                    </div>
                                <div className="home-front-page" style={{ display: 'flex', alignItems: 'center', padding: '60px' }}>
                                    
                                    <div style={{ flex: 2, paddingLeft: '20px' }}>
                                        
                                        <div className='container'>
                                            <div className='row mt-5'>
                                                <div className='text-center'>
                                                    <h4 className='col-lg-12 col-md-12 fw-bold pt-5 px-lg-5 lh-lg'>
                                                        "Welcome to <span style={{ color: 'blue' }}>Oom Shri Traders</span> - Where Style Meets Comfort for Little Ones! Discover our exclusive dress shop specializing in high-quality muslin and cotton outfits for Kids and Mens. Founded by passionate entrepreneurs, <span style={{ color: 'blue' }}>Oom Shri Traders</span> is your go-to destination for adorable and fashion-forward clothing, ensuring your little gentlemen look and feel their best. Explore our collection today and dress your kids in comfort and style!"
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='text-center text-success'>
                                            <a href='/login'>
                                                <h3 className='mt-2 fw-bold underline-on-hover'>
                                                    Visit Store?
                                                </h3>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </section>
                    {isAuthenticated && productsCount > 0 && productsCount > resPerPage ?
                        <div className="d-flex justify-content-center mt-5">
                            <Pagination
                                activePage={currentPage}
                                onChange={setCurrentPageNo}
                                totalItemsCount={productsCount}
                                itemsCountPerPage={resPerPage}
                                nextPageText={'Next'}
                                firstPageText={'First'}
                                lastPageText={'Last'}
                                itemClass={'page-item'}
                                linkClass={'page-link'}
                            />
                        </div> : null}
                </Fragment>
            }
        </Fragment>
    );
}

