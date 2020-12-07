import React, {Component} from 'react';
import Woman from "../man&woman/woman";

class Women extends Component {

				women = [
						{id:1,name: 'anya', age: 29, status: true, husband_id: 5},
						{id:2,name: 'alina', age: 15, status: false, husband_id: 2},
						{id:3,name: 'ira', age: 31, status: true, husband_id: 1},
						{id:4,name: 'diana', age: 22, status: false, husband_id: 2},
						{id:5,name: 'yulia', age: 21, status: true, husband_id: 3}]

		render() {
				return (
						<div>
								{
								this.women.map(value => <Woman item={value} key={value.id}/>)
								}
						</div>
				);
		}
}

export default Women;