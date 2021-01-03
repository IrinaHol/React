import React, {useMemo} from 'react';
import {ProductItem} from "../products-item";
import {Card} from 'semantic-ui-react'
import './ProductList.css'

import {useDispatch, useSelector} from "react-redux";
import { toggleItemInCart, toggleItemInWishList } from "../../Redux";
import MenuComponent from "../menu";


export const ProductList = ({products, totalPrice}) => {
		const dispatch = useDispatch();




		// const cart = useSelector(({ cart: { cart } }) => cart);
		const AddToCart = (product) => {
				dispatch(toggleItemInCart(product, totalPrice))
				// dispatch(toggleItemInCart(totalPrice))
				// totalPrice()
				// products.reduce((acc, value)=>acc + value.price, 0)

		}
		const AddToWishList = (product) => {
				dispatch(toggleItemInWishList(product))

		}
		// const totalPrice = useMemo(()=>{
		// 				return products.reduce((acc, value)=>acc + value.price, 0)
		// 		// let count = products.length
		//
		// })

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
												// totalCart={totalCart}


										/>

								))}
								{/*<MenuComponent totalPrice = {totalPrice}/>*/}

						</section>


				</div>



		);
}