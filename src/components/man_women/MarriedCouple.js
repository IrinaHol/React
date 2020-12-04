import React, {Component} from 'react';
import './components.css'

class MarriedCouple extends Component {

		render() {
				return (
						<div className={'married'}>
								{
										this.props.couple.map(obj => <p>{obj.name}-{obj.age}-{obj.id}</p>)
								}
								<hr/>
						</div>
				);
		}
}

export default MarriedCouple;