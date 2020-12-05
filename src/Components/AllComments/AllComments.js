import React, {Component} from 'react';
import Comment from "../Comment/Comment";
import {CommentServices} from "../../services/CommentServices";

class AllComments extends Component {
		CommentService = new CommentServices()

		state = {comments: [], choseComment: null}

		funClickComment = (id) =>{
		this.CommentService.getCommentById(id).then(value => this.setState({choseComment:value}))
		}

		componentDidMount() {
				this.CommentService.getAllComments().then(value => this.setState({comments:value}))
		}

		render() {
		let {comments, choseComment} = this.state
				return (
						<div>
								{
										comments.map(value => <Comment item={value}
										key={value.id}
										funClickComment={this.funClickComment}
					      		 isShowButton={true}/>)
								}
								{

										choseComment && (<h3><Comment item={choseComment}  isShowButton={false} /></h3>)

								}
						</div>
				);
		}
}

export default AllComments;