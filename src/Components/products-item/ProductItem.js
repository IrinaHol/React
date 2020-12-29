import React from 'react'
import {Card, Image, Button} from 'semantic-ui-react'
import './ProductItem.css'

export const ProductItem = (
		{AddToCart, AddToWishList, value,
				value: {id, image, title, price}}) => {


		return (
				<Card key={id}>
						<Image src={image} wrapped ui={false}/>
						<Card.Content>
								<Card.Header>{title}</Card.Header>

						</Card.Content>

						<h3>

								{price} $
						</h3>
						<div className='btn'>
								<div className='color'>
										<Button onClick={()=>AddToCart(value)}>Додати в кошик</Button> </div>
								<Button onClick={()=>AddToWishList(value)}>Add to WishList</Button>
						</div>

				</Card>

		);
}