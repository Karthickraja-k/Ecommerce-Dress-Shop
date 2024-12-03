const User = require('../models/userModel');
const Product = require('../models/productModel') ;
const asyncHandler = require('express-async-handler');
const ErrorResponse = require('../utils/errorHandler');

// Add product to wishlist

/* exports.addProductToWishList = async (req, res) => {
  try {
    const { userId } = req.body; // Assuming you have user authentication middleware
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (!user.wishlist) {
      user.wishlist = [];
    }

    // Check if product already exists in wishlist
    if (user.wishlist.includes(req.params.id)) {
      return res.status(400).json({ message: 'Product already in wishlist' });
    }

    user.wishlist.push(req.params.id);
    await user.save();

    res.json({ message: 'Product added to wishlist' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error adding product to wishlist' });
  }
}; */

exports.addProductToWishList = asyncHandler(async (req, res, next) => {
    const productId = req.params.id;
    const userId = req.user.id;
  
    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return next(new ErrorResponse('User not found', 401));
    }
  
    const product = await Product.findById(productId);
  
    if (!product) {
      return next(new ErrorResponse('Product not found', 404));
    }
  
    // Check if the product is already in the user's wishlist
    if (user.wishlist.includes(productId)) {
      return next(new ErrorResponse('Product already in wishlist', 400));
    }
  
    // Add product to the user's wishlist
    user.wishlist.push(productId);
    await user.save();
  
    res.status(200).json({ success: true, data: user.wishlist });
  });

// Remove product from wishlist
/* router.delete('/remove-from-wishlist/:productId', async (req, res) => { */
exports.deleteWishListItems = async (req, res) => {  
    try {
        const  userId  = req.user.id;
        const user = await User.findByIdAndUpdate(
          userId,
          { $pull: { wishlist: req.params.id } }, // here id = Product id
          { new: true } // Return the updated user document
        );
    
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }

        if (!user.wishlist.length < 0) {
          return res.status(404).json({ message: 'Product not found in wishlist' });
        }
    
        res.json({ message: 'Product removed from wishlist' });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error removing product from wishlist' });
      }
};

// Get user's wishlist
/* router.get('/wishlist', async (req, res) => { */
/* exports.getWishListItems = async (req, res) => {
  try {
    const  userId  = req.params.id;

    if (!userId) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }

    const user = await User.find(userId);

    console.log(user)

    if (!user) {
      return res.json( 'user not found' );
    }

    if ( !user.wishlist) {
      return res.json( 'wislist not found' );
    }
    // Retrieve product details based on wishlist IDs (replace with your logic)
    const products = await Product.find({ _id: { $in: user.wishlist } }); // Assuming you have a Product model
     //console.log(products)
    res.json( products );
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching wishlist' });
  }
}; */

exports.getWishListItems = async (req, res) => {
  try {
    const userId = req.params.id;

    // Find the user by ID with populated wishlist
    const user = await User.findById(userId).populate('wishlist');
    //console.log(user)
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const wishlistItems = user.wishlist;

    //console.log(wishlistItems)

    res.json({ wishlist: wishlistItems });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching wishlist items' });
  }
};


