import {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';

export default function ReduxHomeWork() {
		const storeTodo = useSelector((state) => {
				return state
		})
		const dispatch = useDispatch();
		const [counter, setCounter] = useState(1);
		const [inputValue, onChangeValue] = useState('')

		const fetchData = async () => {
				const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
				const value = await response.json();
				dispatch({type: 'SET_TODO_ITEM', payload: value})
		}
		useEffect(() => {
				fetchData()
		}, [counter]);

		const ChangeCompletedTODO = () => {
				(
						dispatch({type: 'TOGGLE_TODO_COMPLETED'})
				)
		}
		return (
				<div>
						<h1>Counter:{counter}</h1>
						<button onClick={() => {setCounter((prevState) => prevState + 1)}}>Change todo</button>
						<button onClick={() => {dispatch({type: 'RESET_TODO'})}}>Reset todo</button>
						<input value={inputValue} onChange={({target: {value}}) => onChangeValue(value)}/>
						<button onClick={() => {dispatch({type: 'CHANGE_TODO_TITLE', payload: inputValue})}}>Change TODO title</button>
						<button onClick={ChangeCompletedTODO}>Change completedTODO</button>
						{!!storeTodo && (<h2>  {storeTodo.id}-{storeTodo.title}-{storeTodo.completed.toString()}</h2>)}

				</div>
		);
}

