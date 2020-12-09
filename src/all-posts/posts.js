import React, {Component} from 'react';
import {PostServices} from "../services/postServices";
import Post from "../posts/post";
import {Route, Switch, withRouter} from "react-router-dom";
import FullPosts from "../Full-posts/FullPosts";

class Posts extends Component {
		state = {posts:[], prevProps: [{userId: 0}]}
		postServices = new PostServices()


		 async componentDidMount() {
		 		let posts = await this.postServices.getAllPost();
		 		this.setState({posts});
		}

		render() {

				let{posts}=this.state;
				let {match: {url}} = this.props;
				return (
						<div>
								{
										posts.map(value => <Post item={value} key={value.id}/>)
								}

								<hr/>
							<Switch>
									<Route path={url +'/:id'} render={(props)=>{
											const{match: {params: {id}}} = props;
									return <FullPosts {...props} key={id}/>}}/>;
							</Switch>
								<hr/>
						</div>
				);
		}
}

export default withRouter (Posts);