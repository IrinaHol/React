import React, {Component} from 'react';
import Post from "../Post/Post";
import {withRouter} from "react-router-dom";
import PostServices from "../Services/PostServices";
import './All-post.css'


class AllPosts extends Component {
		postService = new PostServices();
		state = {chosenPost:null}

		componentDidMount() {
				let {id}=this.props
				this.postService.getAllPosts(id).then(value =>
						this.setState({chosenPost:value})
				)
		}

		render() {
				const{chosenPost}=this.state
				// let {match:{url}} = this.props;
				return (
						<div className='main-post'>

								{chosenPost && chosenPost.map((value,index)=>
								 (<Post item={value} key={index}/>))}
						</div>
				);
		}
}

export default withRouter(AllPosts);