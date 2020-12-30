const initialState = {
		name:  [],
		age:  []
}


export const reducer = (state = initialState.name, action) => {
		switch (action.type) {
				case 'ADD_USERS': {
						 state.push(action.payload)
						return[...state]
				}
				case 'DELETE_USERS': {
						const filter = state.filter(value => value.id !== action.payload)
						return [...filter]
				}
				default: {
						return state
				}
		}
}