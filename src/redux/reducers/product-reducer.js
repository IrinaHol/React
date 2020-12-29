import {SET_PRODUCTS, SET_IS_READY} from '../action-types';


const initialState = {
		isReady: false,
		products: []
}

 const productReducer = (state=initialState, action) => {
		switch (action.type) {
				case SET_PRODUCTS:{
						return {...state, products: action.payload,
						isReady: true}
				}
				case SET_IS_READY:{
						return {...state, isReady: action.payload}
				}
		// 		case ADD_TO_CARTS: {
		// 				// const itemInCart = state.cart.find(el => el.id === action.payload.id)
		// 				// const updatedCart = [...state.cart]
		// 				// if (!itemInCart) updatedCart.push(action.payload)
		// 				// return {...state, cart: updatedCart}
		// 				return {...state, products: action.payload};
		// 				// return {products: [...state.products.action.payload]}
		// }
				// case REMOVE_FROM_CART: {
				// 		return {
				// 				...state,
				// 				cart: state.cart.filter(el => el.id !== action.payload)
				// 		}}

				default: {
						return state;
				}
		}
}
 export default productReducer;