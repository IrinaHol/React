import React, {useEffect}from 'react'
import {useMemo} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setProduct} from './Redux';
import {ProductList} from "./Components/products-list";
import MenuComponent from "./Components/menu";
import {ProductItem} from "./Components/products-item";

export default function App() {
		const {products, cart} = useSelector(
				({products:{products}, cart:{cart}}) => ({products, cart})

		);
		console.log(products)
		const dispatch = useDispatch();
		//
		// const fetchTodos = async()=>{
		// 		try {
		// 				const response = await fetch('https://jsonplaceholder.typicode.com/todos');
		// 				const data = await response.json();
		// 				dispatch(setTodos(data))
		// 		}
		// 		catch (e){
		// 				console.error(e)
		// 		}
		//
		// }

		useEffect(()=>{
				dispatch(setProduct())
		},[dispatch]);

	//
	const totalPrice = useMemo(()=>{
				return products.reduce((acc, value)=>acc + value.price, 0)

		},[products])
		console.log(totalPrice)

		// const totalCart = useMemo((id)=>{
		// 			return cart.reduce((acc, value)=>acc + (value.id === id ? 1 : 0), 0)
		//
		// 	},[])
		// 	console.log(totalCart)

		return (
				<div>
						{products.length}
						<MenuComponent  products={products} />
					<ProductList products={products} totalPrice={totalPrice}/>
						{/*<ProductItem totalPrice={totalPrice}/>*/}

				</div>

)

}