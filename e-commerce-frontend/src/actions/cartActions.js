import {addCartItemRequest, addCartItemSuccess} from '../slices/cartSlice';
import axios from 'axios'

export const addCartItem = (id, quantity) => async(dispatch) => {
    const getToken =  localStorage.getItem('token');
    try {
        dispatch(addCartItemRequest())
        const {data } = await axios.get(`/api/v1/product/${id}`,
        {
            headers: {
                Authorization: `Bearer ${getToken}`,
              },
        })

       // console.log(data)

        dispatch(addCartItemSuccess({
            product: data.product._id,
            name: data.product.name,
            price: data.product.price,
            offerPrice:data.product.offerPrice,
            size:data.product.size,
            image: data.product.images[0].image,
            stock: data.product.stock,
            quantity
        }))
    } catch (error) {
        
    }
}
