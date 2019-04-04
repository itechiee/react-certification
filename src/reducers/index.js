import { productReducer, cartReducer } from './cartReducer';
import { combineReducers } from 'redux';


export default combineReducers({
	products: productReducer,
	cart: cartReducer
});