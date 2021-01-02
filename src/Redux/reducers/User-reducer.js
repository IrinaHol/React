import {ADD_USERS, DELETE_USERS, CHANGE_USERS} from '../action-types'


const initialState = {
		user:  []

}


export const reducer = (state = initialState.user, action) => {
		switch (action.type) {
				case ADD_USERS: {
						state.push(action.payload)
						return[...state]
				}
				case DELETE_USERS: {
						const filter = state.filter(value => value.id !== action.payload)
						return [...filter]
				}
				case CHANGE_USERS: {
						console.log(state, 'state')
						const changeUser = state.filter(value=>value.id === action.payload.id)
						changeUser.name = action.payload.name; // міняю його name i age на той який вводять в модальному вікні
						changeUser.age = action.payload.age;
						console.log(changeUser.name,'name');
						console.log(changeUser.age,'age');
						console.log(changeUser,'filteredArr');
						return [...changeUser]
				}
				default: {
						return state
				}
		}
}