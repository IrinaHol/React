import {TOGGLE_ITEM_IN_CART, REMOVE_FROM_CART} from '../action-types';


const initialState = {
		cart: [],

}

const cartReducer = (state=initialState, action) => {
		switch (action.type) {

				case TOGGLE_ITEM_IN_CART: {
						const updatedCart = state.cart.filter(el => el.id !== action.payload.id)
						if (updatedCart.length === state.cart.length){
								updatedCart.push(action.payload)
						}

								return {...state, cart: updatedCart}
				}
				// case 'PRICE': {
				// 		const updatedCart = state.cart.filter(el => el.id !== action.payload.id)
				// 		if (updatedCart.length === state.cart.length){
				// 				updatedCart.push(action.payload)
				// 		}
				//
				// 		return {...state, cart: updatedCart}
				// }


				// case REMOVE_FROM_CART: {
				// 		return{...state, ca
				// 				return state;rt: state.cart.find(el=>el.id !== action.payload.id)
				// 		}}

				default: {
						return state
				}
		}
}
 export default cartReducer;