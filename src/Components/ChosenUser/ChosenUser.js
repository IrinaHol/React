import React, {Component} from 'react';
import './../All-Users/AllUsers.css'

class ChosenUser extends Component {
		render() {
				let {chosenUsers} = this.props;
				return (
						<div>
								{chosenUsers &&
								<div className='chosen-user'>
										<div className='header-user'><h2>{chosenUsers.name}</h2>
												<p className='userName'>{chosenUsers.username}</p></div>

										<div className='contact'>
												<div className='phone'><h3>Phone: <span className='text'>{chosenUsers.phone}</span></h3>
														<h3>Email: <span className='text'> {chosenUsers.email}</span></h3></div>
												<h3>Website: <span className='text'>{chosenUsers.website}</span></h3></div>


								</div>}
						</div>
				);
		}
}


export default ChosenUser;