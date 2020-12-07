import React, {Component} from 'react';
import Comment from "../comment/Comment";
import {CommentService} from "../services/CommentService";

class AllComments extends Component {
		commentService = new CommentService;
		state = {comments:[]}


		async componentDidMount() {
				let comments = await this.commentService.getAllComments()
				this.setState({comments})
		}

		render() {
				let {comments} = this.state;
				return (
						<div>
								{
										comments.map(value => <Comment key={value.id} item={value}/>)
								}
						</div>
				);
		}
}

export default AllComments;