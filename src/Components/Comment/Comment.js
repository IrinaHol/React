import React, {Component} from 'react';

class Comment extends Component {

		render() {
				let {item,funClickComment, isShowButton} = this.props
				return (
						<div>
								{item.id}-{item.name} - {item.email}  {isShowButton &&
								<button onClick={()=> {funClickComment(item.id)}}> Chose comment</button>
								}
						</div>
				);
		}
}

export default Comment;