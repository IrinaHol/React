import React, {Component} from 'react';
import './style.css'

class MarriedCouple extends Component {
		render() {

				let {couple}=this.props
				return (
						<div className={'block'}>

								{
										couple.map(obj => <p>{obj.name}-{obj.age}-{obj.id}</p>)
								}

						</div>
				);
		}
}

export default MarriedCouple;