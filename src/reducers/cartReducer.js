import { PRODUCTS_LOADED,ADD_TO_CART } from '../actions/cartActions';

// export function cartReducer(state = [], action) {
// 	switch(action.type) {
// 		case PRODUCTS_LOADED:
// 		let loadedProduct = action.products;
// 		// console.log('loadedProduct => '+ loadedProduct);
// 			// return [...state, loadedProduct];
// 			return  action.products;
// 		case ADD_TO_CART:
// 		// console.log(state);
// 			let addedItem = state.find(product => action.id === product.id);
// 			console.log(addedItem)
// 		default:
// 			return state;		
// 	}
// }

export function productReducer(state = [], action) {
	switch(action.type) {
		case PRODUCTS_LOADED:
		let loadedProduct = action.products;
			return  action.products;
		default:
			return state;		
	}
}

// export function cartReducer(state = {}, action) {
// 	switch(action.type) {
// 		case ADD_TO_CART:
// 		console.log(state);
// 			let existingItem = state.addedItem.findIndex((pid) => pid === action.id);
// 			if(existingItem === -1) {
// 				// let addedItem = {
// 				// 	addedItem:[action.id]
// 				// };
// 				// return {...state, ...addedItem };

// 				let oldstate = state.addedItem;
// 				let updatedItem = [...oldstate, action.id];
// 				return {...state, addedItem:updatedItem };

// 			}
// 		default:
// 			return state;		
// 	}
// }


export function cartReducer(state = {}, action) {
	switch(action.type) {
		case ADD_TO_CART:
		// console.log(action);
		console.log(state);
			let existingItem = state.addedItem.findIndex((pid) => pid === action.cartProduct.id);
			if(existingItem === -1) { // New item
				// let addedItem = {
				// 	addedItem:[action.id]
				// };
				// return {...state, ...addedItem };

				let existingItems = state.addedItem;
				let updatedItem = [...existingItems, action.cartProduct.id];
				let existingProduct = state.cartProduct;
				let updatedProduct = [...existingProduct, action.cartProduct];
				return {...state, 
						addedItem:updatedItem,
						total: action.cartProduct.price,
						cartProduct:updatedProduct
					
				};

			} else { // Existing Item
				let stateAddedItem = state.addedItem;
				// let updatedItem = [...stateAddedItem, action.cartProduct.id];
				console.log('stateAddedItem '+ stateAddedItem);
			}
		default:
			return state;		
	}
}