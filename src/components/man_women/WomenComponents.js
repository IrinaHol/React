import React, {Component} from 'react';
import './components.css'

class WomenComponents extends Component {
		render() {
				let {item} = this.props
				return (
						<div className={'women'}>
								{item.name}-{item.age}-{item.husband_id}
								{/*<button onClick={()=>selectThisUser(item.id)}>Chose me</button>*/}
						</div>
				);
		}
}

export default WomenComponents;