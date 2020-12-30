import {SET_PRODUCTS, TOGGLE_ITEM_IN_CART, TOGGLE_ITEM_IN_WISHLIST} from "../action-types";

export const setProducts = (payload)=>(
		{type: SET_PRODUCTS,payload}
)

export const setProduct = ()=> {
		return async (dispatch) => {
				try {
						const response = await fetch('https://fakestoreapi.com/products')
						const data = await response.json()
						dispatch(setProducts(data))

				} catch (e) {
						console.error(e)
				}
		}
}


export const toggleItemInCart = (product) => ({
		type: TOGGLE_ITEM_IN_CART,
		payload: product

});

export const toggleItemInWishList = (product) => ({
		type: TOGGLE_ITEM_IN_WISHLIST,
		payload: product
});

