import {SET_PRODUCTS, SET_IS_READY} from '../action-types';


const initialState = {
		// isReady: false,
		products: []
}

 const productReducer = (state=initialState, action) => {
		switch (action.type) {
				case SET_PRODUCTS:{
						return {...state, products: action.payload}
						// isReady: true}
				}
				// case SET_IS_READY:{
				// 		return {...state, isReady: action.payload}
				// }


				default: {
						return state;
				}
		}
}
 export default productReducer;