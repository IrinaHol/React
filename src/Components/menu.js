
import React from "react";
import './menu.css'
import { useSelector } from "react-redux";
import wishListReducer from "../redux/reducers/wish-list-reducer";
import {totalPrice} from '../App'
const MenuComponent = ({totalPrice}) => {
		const { cart, wishList } = useSelector(
				({ cart: { cart }, wishList: { wishList } }) => ({
						wishList,
						cart
				}));

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
												СУМА: <h5>{totalPrice}</h5>
										</div>
								</div>
						</div>
				</header>
		);
};
export default MenuComponent;






