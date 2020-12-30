
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'


export default function Users (){
		const user = useSelector(user => user);
		const dispatch = useDispatch();
		console.log(user)
const addUsers =(e)=>{
		e.preventDefault()

		const name= e.target[0].value
		const age = +e.target[1].value
		dispatch({type: 'ADD_USERS', payload:{name, age, id:Math.floor(Date.now() / 1000)}})

}

const deleteUsers = (e)=>{
		e.preventDefault()
		const name= e.target[0].value
		const age = +e.target[1].value
		dispatch({type: 'DELETE_USERS', payload:{name, age, id:Math.floor(Date.now() / 1000)}})

}

		return (
        <div>

						<form onSubmit={addUsers} >

						<input/>
						<input type='number'/>
								<button>Add user</button>

						</form>
						<form onSubmit={deleteUsers}>
								<button>Delete</button>
							</form>


								<div>{user.map((user) =>
										<p key={user.id}> name: {user.name} <hr/> age: {user.age}</p>
								)}
										<form onSubmit={deleteUsers}>
												<button>Delete</button>
										</form>

								</div>

        </div>
    );
}