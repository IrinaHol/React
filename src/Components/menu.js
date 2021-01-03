
import React, {useMemo} from "react";
import './menu.css'
import { useSelector } from "react-redux";
// import wishListReducer from "../redux/reducers/wish-list-reducer";
// import {totalPrice} from '../App'
const MenuComponent = ({totalPrice}) => {
		const { cart, wishList,  products } = useSelector(
				({ cart: { cart }, wishList: { wishList },  products:{ products} }) => ({
						wishList,
						cart,
						products
				}));
		console.log(cart)
		// const total = useMemo(()=>{
					let itemCount = cart.reduce((acc, {quantity}) => acc + quantity, 0);
				const total = cart.reduce((acc, {price, quantity}) => acc + price * quantity, 0);
		// 		return products.reduce((acc, value)=>acc + value.price, 0)
		// 		//
		// 		// console.log(totalCostOfGoods)
		// })
		// const getAdditionalInfo = () => {
		// 		if (cart.length) {
		//
		//let itemCount = cart.reduce((total, product) => total + product.quantity, 0);
		//const total = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
		//

		console.log(itemCount)
		console.log(total)
		// 				return (
		// 						<>
		// 								<h4> Goods in cart: { goodsQuantity } </h4>
		// 								<h5> The total cost of good(s): { totalCostOfGoods } $ </h5>
		// 						</>
		// 				);
		// 		}
		//
		// 		return <h4> Your cart is empty. </h4>;
		// };

		return (
				<header className="">


						<div className="box-menu">
								<h2>ROZETKA</h2>
								<div className="btn-menu-position">
								<div className="btn-menu btn-color" title="">
										cart: {cart.length}
								</div>
								<div className="btn-menu btn-color-next" title="Сума: ">
										wishlist: {wishList.length}
								</div>
										<div className="btn-menu btn-color-next2" title="Сума: ">
												{/*СУМА: <h5>{ cart.reduce((acc, {quantity}) => acc + quantity, 0) }*/}
												{cart.length &&
														<total>
																<p>Total Items: <h2>{itemCount}</h2></p>
																<p>Payment</p>
																<h2>{total}$</h2>
														</total> }
												{/*{ cart.reduce((acc, quantity) => acc + quantity, 0) }*/}
										{/*</h5>*/}
										</div>
								</div>
						</div>
				</header>
		);
};
export default MenuComponent;






