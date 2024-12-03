import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserProductList = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');  
  const [category, setCategory] = useState(''); 
  const handleFilterSubmit = async () => {
    try {
      const response = await axios.get('/api/v1/filter-products', {
        params: {
          minPrice,
          maxPrice,          
          category 
        },
      });

      setFilteredProducts(response.data.data);
    } catch (error) {
      console.error('Error fetching filtered products:', error);
    }
  };

  useEffect(() => {
    // Initial fetch or any other logic
    handleFilterSubmit();
  }, [minPrice, maxPrice, category]); 

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left side: Filters */}
        <div className="col-lg-3 mb-4">
          <div style={{ paddingTop: '20px', paddingBottom: '20px', background: 'grey', height: '100%', paddingLeft: '30px', color: 'white' }}>
            {/* Filter input fields */}
            <h4>Filterbar</h4>
            <label>
              Min Price:
              <input type="text" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
            </label>

            <label>
              Max Price:
              <input type="text" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
            </label>             

            {/* Category Filter */}
            <label>
              Select Category:
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">All</option>
                <option value="Mens">Mens</option>
                <option value="Kids">Kids</option>                
              </select>
            </label>
          </div>
        </div>

        {/* Right side: Product list */}
        <div className="col-lg-9 col-md-12" style={{ paddingTop: '20px' }}>
          <div className="row">
            {filteredProducts.map((product) => (
              <div key={product._id} className='col-lg-5 mb-2'>
                <div className='container-fluid pt-lg-0 pt-5 mt-lg-0 mt-5'>
                  <div className='border rounded shadow' style={{ width: '340px', height:'255px' }}>
                    <div className='d-flex'>
                      {product.images.length > 0 && (
                        <img
                          className="img-fluid rounded-start" style={{ height: "250px", width: '200px' }}
                          src={product.images[0].image}
                          alt={product.name}
                        />
                      )}

                      <div className="mt-3 text-center" style={{ paddingTop: '0px', marginLeft: '15px' }}>
                        <h5 className="mb-2">
                          <Link to={`/product/${product._id}`}>{product.name}</Link>
                        </h5>
                        <div className="ratings">
                          <div className="rating-outer">
                            <div
                              className="rating-inner"
                              style={{ width: `${(product.ratings / 5) * 100}%` }}
                            ></div>
                          </div>
                          <span id="no_of_reviews" className="ms-1">
                            ({product.numOfReviews} Reviews)
                          </span>
                        </div>                        

                        <p className="price">
                          {product.offerPrice > 0 && (
                            <>
                              <span className="old-price">₹{product.price}</span>
                              <span className="offer-price"> Offer Price: ₹{product.offerPrice}</span>
                            </>
                          )}
                          {!product.offerPrice && <span className="price">₹{product.price}</span>}
                        </p>

                        <div style={{ paddingTop: '20px' }}>
                          <Link
                            to={`/product/${product._id}`}
                            id="view_btn"
                            className="btn btn-outline-primary"
                          >
                            View
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProductList;



