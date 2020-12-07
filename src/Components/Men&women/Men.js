import React, {Component} from 'react';
import Man from "../man&woman/man";


class Men extends Component {

				men = [{id:1,name: 'andrey', age: 50, status: false},
						{id:4,name: 'viktor', age: 25, status: true},
						{id:3,name: 'nazar', age: 39, status: true},
						{id:5,name: 'sasha', age: 18, status: false},
						{id:2,name: 'yra', age: 41, status: false}]


		render() {
				return (
						<div>
								{
										this.men.map(value => <Man item={value} key={value.id}/>)
								}

						</div>
				);
		}
}

export default Men;