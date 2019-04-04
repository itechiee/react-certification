import  axios  from 'axios';
import { apiProductsUrl } from '../config/settings';

export const PRODUCTS_LOADED = 'PRODUCTS_LOADED';
export const ADD_TO_CART = 'ADD_TO_CART';
export const productLoaded = (products) => {
    return {
      type: PRODUCTS_LOADED,
      products
    }
}

export const getProducts = () => {
      return (dispatch) => {
          axios.get(apiProductsUrl)
            .then((result) => {
              dispatch(productLoaded(result.data));
            })
            .catch((error) => {
              console.log(error)
            });
      }
      
  }

  export const addToCart = (product) => {
    let cartProduct = product;
    return {
      type: ADD_TO_CART,
      cartProduct
    }
  }