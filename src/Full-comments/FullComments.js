import React, {Component} from 'react';
import {CommentsServise} from "../services/commentsServise";

class FullComments extends Component {
		state = {comments: null}
		commentsService = new CommentsServise()
		async componentDidMount() {
				let {id} = this.props
				let comments = await this.commentsService.getCommentsById(id)
				this.setState({comments})
		}

		render() {
				let {comments} = this.state;
				return (
						<div>
								{comments&&<div>{comments.id}-{comments.name}</div>}
						</div>
				);
		}
}

export default FullComments;