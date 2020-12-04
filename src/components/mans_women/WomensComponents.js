import React, {Component} from 'react';
import WomenComponents from "../man_women/WomenComponents";
import './comments.css'

class WomensComponents extends Component {
		// state = {users: [], chosenUser: null};


		// women = [
		// 		{id: 1, name: 'Ira', age: 43, wife_id: 2},
		// 		{id: 2, name: 'Nadia', age: 18, wife_id: 1},
		// 		{id: 3, name: 'Kate', age: 24, wife_id: 5},
		// 		{id: 4, name: 'Dina', age: 19, wife_id: 3},
		// 		{id: 5, name: 'Olia', age: 15, wife_id: 6},
		// 		{id: 6, name: 'Nadia', age: 23, wife_id: 4}
		// ]


		render() {

				console.log(this.props);

				return (
						<div>
								{
										this.props.womens.map(value =>
												(<WomenComponents
														item = {value}
														key ={value.id}

												/>))
								}

						</div>
				);
		}
}

export default WomensComponents;