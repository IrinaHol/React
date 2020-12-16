import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import './../All-Users/AllUsers.css'

class User extends Component {
		render() {
				const {item, selectPost, match:{url}} = this.props
				return (
						<div className='block-all-users'>

								<div className='all-users'>{item.id}. {item.name}</div>
							<div className='all-btn'>
								<button  className="Btn" onClick={() => selectPost(item.id)}>Details</button>
								<div className='btn-post'><Link  className='link-post' to={`${url}/${item.id}`}>Post</Link> </div>
							</div>
						</div>
				);
		}
}

export default withRouter(User);