import React, {useEffect}from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {incCounter, decCounter, resetCounter, fetchTodos} from './redux';


export default function App() {

		// const todos = useSelector(({todos: {todos}}) => todos);
		// const counter = useSelector(({counter}) => counter.counter);
		const storeDate = useSelector(({counter: {counter}, todos:{todos}})=>({counter, todos}))

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
				dispatch(fetchTodos())
		},[dispatch]);


		const handleInc = () => dispatch(incCounter());
		const handleDec = () => dispatch(decCounter());
		const handleRec = () => dispatch(resetCounter())


		return (
				<div>
						<h2>COUNTER: {storeDate.counter}</h2>
						<button onClick={handleInc}>inc</button>
						<button onClick={handleDec}>dec</button>
						<button onClick={handleRec}>reset</button>
						{storeDate.todos.map((value) =>
								(<h2>{value.id}-{value.title} </h2>))}
				</div>

)

}