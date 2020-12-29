//
// import React, {Component} from 'react';
// import { Menu } from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css'
//
// export default class MenuComponent extends Component {
//
// 		state = {}
//
// 		handleItemClick = (e, {name}) => this.setState({activeItem: name})
//
// 		render() {
// 				const{cart, wishList}=this.props
// 				const {activeItem} = this.state
//
// 						return (
// 								<Menu>
// 										<Menu.Item
// 												name='editorials'
// 												active={activeItem === 'editorials'}
// 										>
// 												Rozetka
// 										</Menu.Item>
//
// 										<Menu.Item
// 												name='reviews'
// 												active={activeItem === 'reviews'}
// 												onClick={this.handleItemClick}
// 										>
// 												Сума: 0 грн.
// 										</Menu.Item>
//
// 										<Menu.Item
// 												name='upcomingEvents'
// 												active={activeItem === 'upcomingEvents'}
// 												onClick={this.handleItemClick}
// 										>
// 												Кошик (0) {cart.length}
// 										</Menu.Item>
// 										<Menu.Item
// 												name='upcomingEvents'
// 												active={activeItem === 'upcomingEvents'}
// 												onClick={this.handleItemClick}
// 										>
// 												WishList (0)
// 										</Menu.Item>
// 								</Menu>
// 						);
// 				}
// }
import React from "react";
import { useSelector } from "react-redux";
import wishListReducer from "../redux/reducers/wish-list-reducer";

const MenuComponent = (props) => {
		const { cart, wishList } = useSelector(
				({ cart: { cart }, wishList: { wishList } }) => ({
						wishList,
						cart
				})
		);

		return (
				<header className="">
						<h2>ROZETKA</h2>

						<div className="">
								<div className="" title="">
										cart: {cart.length}
								</div>
								<div className="" title="">
										wishlist: {wishList.length}
								</div>
						</div>
				</header>
		);
};
export default MenuComponent;






