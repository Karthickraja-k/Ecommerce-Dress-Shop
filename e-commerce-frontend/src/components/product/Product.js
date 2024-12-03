// import React from 'react';
// import { Link } from 'react-router-dom';
// export default function Product({ product, col }) {

//   console.log(product._id)

//   return (
//     <div className='d-flex flex-column' style={{ flexBasis: '30%', flexGrow: '1' }}>
//       <div className='container-fluid pt-lg-0 pt-5 mt-lg-0 mt-5 mt-lg-0  mb-4'>
//         <div className='border rounded shadow' style={{}}>
//           <div className='d-flex flex-row'>
//             <div className="row mt-5 mt-lg-0 " style={{}}>
//               {product.images.length > 0 && (
//                 <img
//                   className="img-fluid rounded-start" style={{ height: "250px", width: '180px' }}
//                   src={product.images[0].image}
//                   alt={product.name}
//                 />
//               )}
//               <div className="mt-3 text-center" style={{ paddingTop: '25px' }}>
//                 <h5 className="mb-2">
//                   <Link to={`/product/${product._id}`}>{product.name}</Link>
//                 </h5>
//                 <div className="ratings">
//                   <div className="rating-outer">
//                     <div
//                       className="rating-inner"
//                       style={{ width: `${Math.min((product.ratings / 5) * 100, 100)}%`}}      
                      
//                       /* style={{ width:'100%' }} */
//                     ></div>
//                   </div>
//                   <span id="no_of_reviews" className="ms-1">
//                     ({product.numOfReviews} Reviews)
//                   </span>
//                 </div>              

//                 <p className="price">
//                   {product.offerPrice > 0 && (
//                     <>
//                       <span className="old-price">₹{product.price}</span>
//                       <span className="offer-price"> Offer: ₹{product.offerPrice}</span>
//                     </>
//                   )}
//                   {product.offerPrice === 0 && <span className="price">₹{product.price}</span>}
//                 </p>



//                 <div style={{ paddingTop: '50px' }}>
//                   <Link
//                     to={`/product/${product._id}`}
//                     id="view_btn"
//                     className="btn btn-outline-primary"
//                   >
//                     View
//                   </Link>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { Link } from 'react-router-dom';

export default function Product({ product }) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card shadow-sm border-light">
        <div className="position-relative">
          {product.images.length > 0 && (
            <img
              className="card-img-top"
              style={{ height: "250px", width:'350px', objectFit: "cover" }}
              src={product.images[0].image}
              alt={product.name}
            />
          )}
          <div className="position-absolute top-0 start-0 p-2">
            {product.offerPrice > 0 && (
              <span className="badge bg-danger">Offer</span>
            )}
          </div>
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">
            <Link to={`/product/${product._id}`} className="text-decoration-none text-dark">
              {product.name}
            </Link>
          </h5>
          <div className="ratings mb-2">
            <div className="rating-outer">
              <div
                className="rating-inner"
                style={{ width: `${Math.min((product.ratings / 5) * 100, 100)}%` }}
              ></div>
            </div>
            <span className="ms-1">
              ({product.numOfReviews} Reviews)
            </span>
          </div>
          <p className="price">
            {product.offerPrice > 0 ? (
              <>
                <span className="old-price text-decoration-line-through">₹{product.price}</span>
                <span className="offer-price text-danger"> ₹{product.offerPrice}</span>
              </>
            ) : (
              <span className="price">₹{product.price}</span>
            )}
          </p>
          <Link
            to={`/product/${product._id}`}
            className="btn btn-outline-primary mt-3"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}

