import React, {Component} from 'react';
import ManComponents from "../man_women/ManComponents";
import './comments.css'

class MansComponents extends Component {
// state = {users: [], chosenUser: null};

		// man. { id, name, age, wife_id }
// man = [
// 		{id: 1, name: 'Oleg', age: 23, wife_id: 5},
// 		{id: 2, name: 'Nik', age: 18, wife_id: 2},
// 		{id: 3, name: 'Ivan', age: 34, wife_id: 6},
// 		{id: 4, name: 'Kolya', age: 99, wife_id: 3},
// 		{id: 5, name: 'Vitalic', age: 45, wife_id: 1},
// 		{id: 6, name: 'Dima', age: 33, wife_id: 4}
// ]




		render() {


				return (
						<div>
								{
										this.props.mans.map(value =>
												(<ManComponents
														item={value}
														key={value.id}

												/>))
								}


						</div>
				);
		}
}

export default MansComponents;