import {ADD_TO_WISHLIST, REMOVE_FROM_CART, TOGGLE_ITEM_IN_WISHLIST} from '../action-types';


const initialState = {
		wishList: [],

}

const wishListReducer = (state=initialState, action) => {
		switch (action.type) {

				case TOGGLE_ITEM_IN_WISHLIST: {

						const updatedWishList = state.wishList.filter(el => el.id !== action.payload.id)
						if (updatedWishList.length === state.wishList.length){
								updatedWishList.push(action.payload)
						}
						return {...state, wishList: updatedWishList}
				}


				default: {
						return state;
				}
		}
}
export default wishListReducer;