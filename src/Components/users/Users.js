import React,{useState} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {ADD_USERS} from '../../Redux'
import UserComponent from "./UserComponent";

import ModifyUser from "../modalWindow/ModalWindow";

export default function Users() {
		let [index,setIndex] = useState(0);
		const user = useSelector(user => user);
		const dispatch = useDispatch()


		let Add = (e) => {
				e.preventDefault()

				const name = e.target[0].value
				const age = +e.target[1].value
				setIndex(prev=>prev+1)
				dispatch({type: ADD_USERS, payload: {id: new Date().getTime(), name, age}})

		}

		return (
				<div>
						<form onSubmit={Add}>
								<input type='text'/>
								<input type='number'/>
								<button>save</button>
						</form>

						<div>{user.map((user, index) =>
								<div key={user.id}> name: {user.name}
										<hr/>
										age: {user.age}
										<UserComponent id={user.id}/>
										<ModifyUser id={user.id} name={user.name} age={user.age}/>
								</div>
				)}
				</div>

				</div>
		)
}