// import { Fragment, useEffect, useState } from "react";
// import Sidebar from "./Sidebar";
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from "react-router-dom";
// import { createNewProduct } from "../../actions/productActions";
// import { clearError, clearProductCreated } from "../../slices/productSlice";
// import { toast } from "react-toastify";

// export default function NewProduct() {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [offerPrice, setOfferPrice] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [subCategory, setSubCategory] = useState("");
//   const [stock, setStock] = useState(0);
//   const [seller, setSeller] = useState("");
//   const [images, setImages] = useState([]);
//   const [imagesPreview, setImagesPreview] = useState([]);

//   const { loading, isProductCreated, error } = useSelector(state => state.productState)

//   const categories = [    
//     'Mens',
//     'Kids'
//   ];

//   const subCategoriesMap = {    
//     Mens : ['T-Shirts','Shirts','Formal Wear', 'Jeans', 'Trousers', 'Spots Wear'],
//     Kids : ['T-Shirts','Shirts','Formal Wear', 'Jeans', 'Trousers', 'Spots Wear']    
//     // Define subcategories for other main categories
//   };

//   const subCategories = subCategoriesMap[category] || [];

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const onImagesChange = (e) => {
//     const files = Array.from(e.target.files);

//     files.forEach(file => {
//       const reader = new FileReader();

//       reader.onload = () => {
//         if (reader.readyState === 2) {
//           setImagesPreview(oldArray => [...oldArray, reader.result])
//           setImages(oldArray => [...oldArray, file])
//         }
//       }

//       reader.readAsDataURL(file)
//     })
//   }

//   const submitHandler = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('price', price);
//     formData.append('offerPrice', offerPrice);
//     formData.append('stock', stock);
//     formData.append('description', description);
//     formData.append('seller', seller);
//     formData.append('category', category);
//     formData.append('subCategory', subCategory);
//     images.forEach(image => {
//       formData.append('images', image)
//     })
//     dispatch(createNewProduct(formData))
//   }

//   useEffect(() => {
//     if (isProductCreated) {
//       toast('Product Created Succesfully!', {
//         type: 'success',
//         position: toast.POSITION.BOTTOM_RIGHT,
//         onOpen: () => dispatch(clearProductCreated())
//       })
//       navigate('/admin/products')
//       return;
//     }

//     if (error) {
//       toast(error, {
//         position: toast.POSITION.BOTTOM_RIGHT,
//         type: 'error',
//         onOpen: () => { dispatch(clearError()) }
//       })
//       return
//     }
//   }, [isProductCreated, error, dispatch, navigate])

//   return (
//     <div className="row">
//       <div className="col-12 col-md-2">
//         <Sidebar />
//       </div>
//       <div className="col-12 col-md-10">
//         <Fragment>
//           <div className="wrapper my-5">
//             <form onSubmit={submitHandler} className="shadow-lg" encType='multipart/form-data'>
//               <h1 className="mb-4">New Product</h1>

//               <div className="form-group">
//                 <label htmlFor="name_field">Name</label>
//                 <input
//                   type="text"
//                   id="name_field"
//                   className="form-control"
//                   onChange={e => setName(e.target.value)}
//                   value={name}
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="price_field">Price</label>
//                 <input
//                   type="text"
//                   id="price_field"
//                   className="form-control"
//                   onChange={e => setPrice(e.target.value)}
//                   value={price}
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="offer_price_field">Offer Price</label>
//                 <input
//                   type="text"
//                   id="offer_price_field"
//                   className="form-control"
//                   onChange={e => setOfferPrice(e.target.value)}
//                   value={offerPrice}
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="description_field">Description</label>
//                 <input
//                   className="form-control"
//                   id="description_field"
//                   rows="8"
//                   onChange={e => setDescription(e.target.value)}
//                   value={description}
//                 ></input>
//               </div>

//               <div className="form-group">
//                 <label htmlFor="category_field">Category</label>
//                 <select onChange={e => setCategory(e.target.value)} className="form-control" id="category_field">
//                   <option value="">Select</option>
//                   {categories.map(category => (
//                     <option key={category} value={category}>{category}</option>
//                   ))}
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label htmlFor="subCategory_field">Subcategory</label>
//                 <select onChange={e => setSubCategory(e.target.value)} className="form-control" id="subCategory_field">
//                   <option value="">Select</option>
//                   {subCategories.map(subCategory => (
//                     <option key={subCategory} value={subCategory}>{subCategory}</option>
//                   ))}
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label htmlFor="stock_field">Stock</label>
//                 <input
//                   type="number"
//                   id="stock_field"
//                   className="form-control"
//                   onChange={e => setStock(e.target.value)}
//                   value={stock}
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="seller_field">Seller Name</label>
//                 <input
//                   type="text"
//                   id="seller_field"
//                   className="form-control"
//                   onChange={e => setSeller(e.target.value)}
//                   value={seller}
//                 />
//               </div>

//               <div className='form-group'>
//                 <label>Images</label>

//                 <div className='custom-file'>
//                   <input
//                     type='file'
//                     name='product_images'
//                     className='custom-file-input'
//                     id='customFile'
//                     multiple
//                     onChange={onImagesChange}
//                   />

//                   <label className='custom-file-label' htmlFor='customFile'>
//                     Choose Images
//                   </label>
//                 </div>
//                 {imagesPreview.map(image => (
//                   <img
//                     className="mt-3 mr-2"
//                     key={image}
//                     src={image}
//                     alt={`Image Preview`}
//                     width="55"
//                     height="52"
//                   />
//                 ))}
//               </div>

//               <button
//                 id="login_button"
//                 type="submit"
//                 disabled={loading}
//                 className="btn btn-block py-3"
//               >
//                 CREATE
//               </button>

//             </form>
//           </div>
//         </Fragment>
//       </div>
//     </div>

//   )
// }


// import { Fragment, useEffect, useState } from "react";
// import Sidebar from "./Sidebar";
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from "react-router-dom";
// import { createNewProduct } from "../../actions/productActions";
// import { clearError, clearProductCreated } from "../../slices/productSlice";
// import { toast } from "react-toastify";

// export default function NewProduct() {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [offerPrice, setOfferPrice] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [subCategory, setSubCategory] = useState("");
//   const [stock, setStock] = useState(0);
//   const [seller, setSeller] = useState("");
//   const [images, setImages] = useState([]);
//   const [imagesPreview, setImagesPreview] = useState([]);
//   const [size, setSize] = useState(""); // New state for size selection

//   const { loading, isProductCreated, error } = useSelector(state => state.productState);

//   const categories = ['Mens', 'Kids'];

//   const subCategoriesMap = {    
//     Mens: ['T-Shirts', 'Shirts', 'Formal Wear', 'Jeans', 'Trousers', 'Sports Wear'],
//     Kids: ['T-Shirts', 'Shirts', 'Formal Wear', 'Jeans', 'Trousers', 'Sports Wear']
//   };

//   const sizesMap = {
//     Mens: ['L', 'M', 'XL', 'XXL'],
//     Kids: ['0-3', '3-5', '5-7', '7-10']
//   };

//   const subCategories = subCategoriesMap[category] || [];
//   const sizes = sizesMap[category] || []; // Get sizes based on category

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const onImagesChange = (e) => {
//     const files = Array.from(e.target.files);
//     files.forEach(file => {
//       const reader = new FileReader();
//       reader.onload = () => {
//         if (reader.readyState === 2) {
//           setImagesPreview(oldArray => [...oldArray, reader.result]);
//           setImages(oldArray => [...oldArray, file]);
//         }
//       }
//       reader.readAsDataURL(file);
//     });
//   }

//   const submitHandler = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('price', price);
//     formData.append('offerPrice', offerPrice);
//     formData.append('stock', stock);
//     formData.append('description', description);
//     formData.append('seller', seller);
//     formData.append('category', category);
//     formData.append('subCategory', subCategory);
//     formData.append('size', size); // Append selected size
//     images.forEach(image => {
//       formData.append('images', image);
//     });
//     dispatch(createNewProduct(formData));
//   }

//   useEffect(() => {
//     if (isProductCreated) {
//       toast('Product Created Successfully!', {
//         type: 'success',
//         position: toast.POSITION.BOTTOM_RIGHT,
//         onOpen: () => dispatch(clearProductCreated())
//       });
//       navigate('/admin/products');
//       return;
//     }

//     if (error) {
//       toast(error, {
//         position: toast.POSITION.BOTTOM_RIGHT,
//         type: 'error',
//         onOpen: () => { dispatch(clearError()) }
//       });
//       return;
//     }
//   }, [isProductCreated, error, dispatch, navigate]);

//   return (
//     <div className="row">
//       <div className="col-12 col-md-2">
//         <Sidebar />
//       </div>
//       <div className="col-12 col-md-10">
//         <Fragment>
//           <div className="wrapper my-5">
//             <form onSubmit={submitHandler} className="shadow-lg" encType='multipart/form-data'>
//               <h1 className="mb-4">New Product</h1>

//               <div className="form-group">
//                 <label htmlFor="name_field">Name</label>
//                 <input
//                   type="text"
//                   id="name_field"
//                   className="form-control"
//                   onChange={e => setName(e.target.value)}
//                   value={name}
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="price_field">Price</label>
//                 <input
//                   type="text"
//                   id="price_field"
//                   className="form-control"
//                   onChange={e => setPrice(e.target.value)}
//                   value={price}
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="offer_price_field">Offer Price</label>
//                 <input
//                   type="text"
//                   id="offer_price_field"
//                   className="form-control"
//                   onChange={e => setOfferPrice(e.target.value)}
//                   value={offerPrice}
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="description_field">Description</label>
//                 <textarea
//                   className="form-control"
//                   id="description_field"
//                   rows="8"
//                   onChange={e => setDescription(e.target.value)}
//                   value={description}
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="category_field">Category</label>
//                 <select onChange={e => setCategory(e.target.value)} className="form-control" id="category_field">
//                   <option value="">Select</option>
//                   {categories.map(category => (
//                     <option key={category} value={category}>{category}</option>
//                   ))}
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label htmlFor="subCategory_field">Subcategory</label>
//                 <select onChange={e => setSubCategory(e.target.value)} className="form-control" id="subCategory_field">
//                   <option value="">Select</option>
//                   {subCategories.map(subCategory => (
//                     <option key={subCategory} value={subCategory}>{subCategory}</option>
//                   ))}
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label htmlFor="size_field">Size</label>
//                 <select onChange={e => setSize(e.target.value)} className="form-control" id="size_field">
//                   <option value="">Select Size</option>
//                   {sizes.map(sizeOption => (
//                     <option key={sizeOption} value={sizeOption}>{sizeOption}</option>
//                   ))}
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label htmlFor="stock_field">Stock</label>
//                 <input
//                   type="number"
//                   id="stock_field"
//                   className="form-control"
//                   onChange={e => setStock(e.target.value)}
//                   value={stock}
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="seller_field">Seller Name</label>
//                 <input
//                   type="text"
//                   id="seller_field"
//                   className="form-control"
//                   onChange={e => setSeller(e.target.value)}
//                   value={seller}
//                 />
//               </div>

//               <div className='form-group'>
//                 <label>Images</label>
//                 <div className='custom-file'>
//                   <input
//                     type='file'
//                     name='product_images'
//                     className='custom-file-input'
//                     id='customFile'
//                     multiple
//                     onChange={onImagesChange}
//                   />
//                   <label className='custom-file-label' htmlFor='customFile'>
//                     Choose Images
//                   </label>
//                 </div>
//                 {imagesPreview.map(image => (
//                   <img
//                     className="mt-3 mr-2"
//                     key={image}
//                     src={image}
//                     alt={`Image Preview`}
//                     width="55"
//                     height="52"
//                   />
//                 ))}
//               </div>

//               <button
//                 id="login_button"
//                 type="submit"
//                 disabled={loading}
//                 className="btn btn-block py-3"
//               >
//                 CREATE
//               </button>

//             </form>
//           </div>
//         </Fragment>
//       </div>
//     </div>
//   );
// }


import { Fragment, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { createNewProduct } from "../../actions/productActions";
import { clearError, clearProductCreated } from "../../slices/productSlice";
import { toast } from "react-toastify";

export default function NewProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [offerPrice, setOfferPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [stock, setStock] = useState(0);
  const [seller, setSeller] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [size, setSize] = useState(""); // New state for size selection

  const { loading, isProductCreated, error } = useSelector(state => state.productState);
  const categories = ['Mens', 'Kids'];

  const subCategoriesMap = {    
    Mens: ['T-Shirts', 'Shirts', 'Formal Wear', 'Jeans', 'Trousers', 'Sports Wear'],
    Kids: ['T-Shirts', 'Shirts', 'Formal Wear', 'Jeans', 'Trousers', 'Sports Wear']
  };

  const sizesMap = {
    Mens: ['L', 'M', 'XL', 'XXL'],
    Kids: ['0-3', '3-5', '5-7', '7-10']
  };

  const subCategories = subCategoriesMap[category] || [];
  const sizes = sizesMap[category] || [];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onImagesChange = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview(oldArray => [...oldArray, reader.result]);
          setImages(oldArray => [...oldArray, file]);
        }
      }
      reader.readAsDataURL(file);
    });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('offerPrice', offerPrice);
    formData.append('stock', stock);
    formData.append('description', description);
    formData.append('seller', seller);
    formData.append('category', category);
    formData.append('subCategory', subCategory);
    formData.append('size', size);
    images.forEach(image => {
      formData.append('images', image);
    });
    dispatch(createNewProduct(formData));
  }

  useEffect(() => {
    if (isProductCreated) {
      toast('Product Created Successfully!', {
        type: 'success',
        position: toast.POSITION.BOTTOM_RIGHT,
        onOpen: () => dispatch(clearProductCreated())
      });
      navigate('/admin/products');
      return;
    }

    if (error) {
      toast(error, {
        position: toast.POSITION.BOTTOM_RIGHT,
        type: 'error',
        onOpen: () => { dispatch(clearError()) }
      });
      return;
    }
  }, [isProductCreated, error, dispatch, navigate]);

  return (
    <div className="row">
      <div className="col-12 col-md-2">
        <Sidebar />
      </div>
      <div className="col-12 col-md-10">
        <Fragment>
          <div className="wrapper my-5">
            <form onSubmit={submitHandler} className="shadow-lg" encType='multipart/form-data'>
              <h1 className="mb-4">New Product</h1>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="name_field">Name</label>
                    <input
                      type="text"
                      id="name_field"
                      className="form-control"
                      onChange={e => setName(e.target.value)}
                      value={name}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="price_field">Price</label>
                    <input
                      type="text"
                      id="price_field"
                      className="form-control"
                      onChange={e => setPrice(e.target.value)}
                      value={price}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="offer_price_field">Offer Price</label>
                    <input
                      type="text"
                      id="offer_price_field"
                      className="form-control"
                      onChange={e => setOfferPrice(e.target.value)}
                      value={offerPrice}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="description_field">Description</label>
                    <textarea
                      className="form-control"
                      id="description_field"
                      rows="4"
                      onChange={e => setDescription(e.target.value)}
                      value={description}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="category_field">Category</label>
                    <select onChange={e => setCategory(e.target.value)} className="form-control" id="category_field">
                      <option value="">Select</option>
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subCategory_field">Subcategory</label>
                    <select onChange={e => setSubCategory(e.target.value)} className="form-control" id="subCategory_field">
                      <option value="">Select</option>
                      {subCategories.map(subCategory => (
                        <option key={subCategory} value={subCategory}>{subCategory}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="size_field">Size</label>
                    <select onChange={e => setSize(e.target.value)} className="form-control" id="size_field">
                      <option value="">Select Size</option>
                      {sizes.map(sizeOption => (
                        <option key={sizeOption} value={sizeOption}>{sizeOption}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="stock_field">Stock</label>
                    <input
                      type="number"
                      id="stock_field"
                      className="form-control"
                      onChange={e => setStock(e.target.value)}
                      value={stock}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="seller_field">Seller Name</label>
                    <input
                      type="text"
                      id="seller_field"
                      className="form-control"
                      onChange={e => setSeller(e.target.value)}
                      value={seller}
                    />
                  </div>

                  <div className='form-group'>
                    <label>Images</label>
                    <div className='custom-file'>
                      <input
                        type='file'
                        name='product_images'
                        className='custom-file-input'
                        id='customFile'
                        multiple
                        onChange={onImagesChange}
                      />
                      <label className='custom-file-label' htmlFor='customFile'>
                        Choose Images
                      </label>
                    </div>
                    {imagesPreview.map(image => (
                      <img
                        className="mt-3 mr-2"
                        key={image}
                        src={image}
                        alt={`Image Preview`}
                        width="55"
                        height="52"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <button
                id="login_button"
                type="submit"
                disabled={loading}
                className="btn btn-block py-3"
              >
                CREATE
              </button>

            </form>
          </div>
        </Fragment>
      </div>
    </div>
  );
}


