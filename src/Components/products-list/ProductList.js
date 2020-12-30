import React from 'react';
import {ProductItem} from "../products-item";
import {Card} from 'semantic-ui-react'
import './ProductList.css'

import {useDispatch, useSelector} from "react-redux";
import { toggleItemInCart, toggleItemInWishList } from "../../redux";


export const ProductList = ({products}) => {
		const dispatch = useDispatch();




		// const cart = useSelector(({ cart: { cart } }) => cart);
		const AddToCart = (product) => {
				dispatch(toggleItemInCart(product))
		}
		const AddToWishList = (product) => {
				dispatch(toggleItemInWishList(product))
		}

		return (
				<div>
						<section className='cart-block'>

							 {products.map((product) => (
										<ProductItem
												// isAddedToWishlist={!!cart.find(({ id }) => id === product.id)}
												AddToCart={AddToCart}
												AddToWishList={AddToWishList}
												key={product.id}
												product={product}
										/>
								))}


						</section>


				</div>



		);
}