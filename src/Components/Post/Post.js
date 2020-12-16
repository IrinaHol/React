import React, {Component} from 'react';
import './../All-Posts/All-post.css'

class Post extends Component {
		render() {
				let {item} = this.props
				return (
						<div className='posts'>
								<div className='posts-item'><h3>{item.id}. {item.title}</h3>
										{item.body} </div>

						</div>
				);
		}
}

export default Post;