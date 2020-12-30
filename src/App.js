import React, {useEffect}from 'react'
import {useMemo} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setProduct} from './redux';
import {ProductList} from "./Components/products-list";
import MenuComponent from "./Components/menu";

export default function App() {
		const {products} = useSelector(
				({products:{products}}) => ({products})

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


	const totalPrice = useMemo(()=>{
				return products.reduce((acc, value)=>acc + value.price, 0)

		})
		console.log(totalPrice)


		return (
				<div>

						<MenuComponent totalPrice={totalPrice}/>
					<ProductList products={products}/>

				</div>

)

}