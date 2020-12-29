import React from 'react';
import {ProductItem} from "../products-item";
import {Card} from 'semantic-ui-react'

import {useDispatch, useSelector} from "react-redux";
import { toggleItemInCart, toggleItemInWishList } from "../../redux";


export const ProductList = ({products}) => {
		const dispatch = useDispatch();
		const AddToCart = (value) => {
				dispatch(toggleItemInCart(value))
		}
		const AddToWishList = (value) => {
				dispatch(toggleItemInWishList(value))
		}

		return (
				<div>
						<Card.Group itemsPerRow={4}>
								{products.map((value) => (
										<ProductItem AddToCart={AddToCart}
																 AddToWishList={AddToWishList} value={value} key={value.id}/>

								))}</Card.Group>
				</div>

				// <Button onClick={addProductToCart}>Додати в кошик</Button>

		);
}