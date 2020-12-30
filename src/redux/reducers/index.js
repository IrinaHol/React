import {combineReducers} from 'redux';

import productReducer from './product-reducer';
import cartReducer from './cart-reducer';
import wishListReducer from './wish-list-reducer'


export const reducer = combineReducers({
		products: productReducer,
		cart: cartReducer,
		wishList: wishListReducer
})