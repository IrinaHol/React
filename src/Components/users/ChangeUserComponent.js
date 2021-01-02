import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_USERS} from "../../Redux";



export default function ChangeUserComponent ({id, name, age}){
		const select = useSelector(select => select);
		console.log(id)
		const dispatch = useDispatch();
		const changeUser = (e) => {
				e.preventDefault()
				let name = e.target[0].value
				let age = +e.target[1].value

				dispatch({type: CHANGE_USERS, payload: {name, age, id}})
				console.log(id)
				console.log(name)
				console.log(age)
		}


		return (
        <div>

            <form action='' onSubmit={changeUser}>
								<b>New name: </b><input type='text'/>
								<b>New age:	</b><input type='number'/>
            <button>Change user</button>
										</form>

						<div>{select.map((user) =>
								<div > name: {user.name} <hr/> age: {user.age}
								</div>
						)}
						</div>
        </div>
    );
}