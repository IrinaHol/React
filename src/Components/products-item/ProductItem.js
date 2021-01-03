import React from 'react'
import {Card, Image, Button} from 'semantic-ui-react'
import './ProductItem.css'

export const ProductItem = (
		{isAddedToWishlist, AddToCart, AddToWishList, totalPrice, product,
				product: {id, image, title, price}}) => {

// const Sum=()=>{}
// if (product.length){
// 		totalPrice
// }
		return (
<div className='style-cart'>
				<Card key={id} className='item' >
						<Image src={image} wrapped ui={false}/>
						<Card.Content>
								<Card.Header>{title}</Card.Header>

						</Card.Content>

						<h3>
								{price} $
						</h3>
						<div className='btn'>
								<div className='color'>
										<Button onClick={()=>AddToCart(product, totalPrice)}>Додати в кошик</Button> </div>
								<Button onClick={()=>AddToWishList(product)}>Add to WishList</Button>
						</div>
				</Card>

</div>

		);
}