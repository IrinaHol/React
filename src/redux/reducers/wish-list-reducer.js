import {ADD_TO_WISHLIST, REMOVE_FROM_CART, TOGGLE_ITEM_IN_WISHLIST} from '../action-types';


const initialState = {
		wishList: [],

}

const wishListReducer = (state=initialState, action) => {
		switch (action.type) {

				case TOGGLE_ITEM_IN_WISHLIST: {
						// const itemInCart = state.cart.find(el => el.id === action.payload.id)
						// const updatedCart = [...state.cart]
						// if (!itemInCart) updatedCart.push(action.payload)
						// return {...state, cart: updatedCart}
						return {...state, wishList:
										[...state.wishList, action.payload]
						}}

				// case REMOVE_FROM_CART: {
				// 		return{...state, cart: state.cart.find(el=>el.id !== action.payload.id)
				// 		}}

				default: {
						return state;
				}
		}
}
export default wishListReducer;