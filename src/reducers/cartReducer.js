import { PRODUCTS_LOADED } from '../actions/cartActions';

export function cartReducer(state = [], action) {
	switch(action.type) {
		case PRODUCTS_LOADED:
		let loadedProduct = action.products;
		console.log('loadedProduct => '+ loadedProduct);
			// return [...state, loadedProduct];
			return  action.products;

		default:
			return state;		
	}
}