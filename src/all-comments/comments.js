import React, {Component} from 'react';
import {CommentsServise} from "../services/commentsServise";
import Comment from "../comments/comment";
import FullComments from "../Full-comments/FullComments";
import {Route, Switch, withRouter} from "react-router-dom";


class Comments extends Component {
		state = {comments:[]}
		commentsServices = new CommentsServise()

		async componentDidMount() {
				let comments = await this.commentsServices.getAllComments()
				this.setState({comments});
		}

		render() {
				let{comments}=this.state
				let {match: {url}} = this.props
				return (
						<div>
								{
										comments.map(value => <Comment item={value} key={value.id}/>)
								}
								<hr/>
								<Switch>
										<Route path={url +'/:id'} render={(props)=>{
												let {match:{params:{id}}}=props
												return <FullComments id={id} key={id}/>}}/>

								</Switch>
								<hr/>
						</div>
				);
		}
}

export default withRouter(Comments);