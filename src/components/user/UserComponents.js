import React, {Component} from 'react';

class UserComponents extends Component {
		render() {
				let {item,selectThisUser} = this.props
				return (
						<div>
								{item.id}-{item.title}
								<button onClick={()=>selectThisUser(item.id)}>Chose me</button>
						</div>
				);
		}
}

export default UserComponents;