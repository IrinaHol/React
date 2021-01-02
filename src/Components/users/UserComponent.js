import React from 'react';
import {useDispatch} from "react-redux";
import { DELETE_USERS} from '../../Redux'


export default function UserComponent({id}) {

		const dispatch = useDispatch();
		const Delete = () => {
				dispatch({type: DELETE_USERS, payload: id})
		}

		return (
				<div>
						<form onSubmit={Delete}>
								<button>Delete Users</button>
						</form>
				</div>
		);
}