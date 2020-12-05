import React, {Component} from 'react';

class Post extends Component {
		render() {
				let{item,functionChosePost,isShowButton}=this.props
				return (
						<div>
								{item.id}-{item.title}-{item.body}
								{!isShowButton && <button onClick={()=>functionChosePost(item.id)}>Chose one</button>}
						</div>
				);
		}
}

export default Post;