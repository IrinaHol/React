import React, {Component} from 'react';
import './components.css'

class ManComponents extends Component {
		render() {
				let {item} = this.props
				return (
						<div className={'man'}>
								{item.name}-{item.age}-{item.wife_id}
								{/*<button onClick={()=>selectThisUser(item.id)}>Chose me</button>*/}
						</div>
				);
		}
}

export default ManComponents;