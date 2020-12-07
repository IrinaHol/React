import React, {Component} from 'react';
import MarriedCouple from "../man&woman/MarriedCouple";

class MarriedCouples extends Component {
	state = {
			man: [{id:1,name: 'andrey', age: 50, status: false},
					{id:4,name: 'viktor', age: 25, status: true},
					{id:3,name: 'nazar', age: 39, status: true},
					{id:5,name: 'sasha', age: 18, status: false},
					{id:2,name: 'yra', age: 41, status: false}],
			women : [
					{id:1,name: 'anya', age: 29, status: true},
					{id:2,name: 'alina', age: 15, status: false},
					{id:3,name: 'ira', age: 31, status: true},
					{id:4,name: 'diana', age: 22, status: false},
					{id:5,name: 'yulia', age: 21, status: true}],
			couple: []
	}

marriedPeople = ()=>{
			let couple =[]
			this.state.man.forEach(value => {
					this.state.women.forEach(value1 => {
							if (value.id === value1.id){
									couple.push([value,value1])
							}
					})
			})
this.setState({couple})
}

render() {
		let{couple}=this.state
				return (

						<div>
								{<button onClick={this.marriedPeople}>Click</button>}
								{
										couple.map(value =>
												<MarriedCouple
												couple={value}
												key={value.id}
												/>
										 )

								}
						</div>
				);
		}
}

export default MarriedCouples;