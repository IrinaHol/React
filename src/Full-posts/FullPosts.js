import React, {Component} from 'react';
import {PostServices} from "../services/postServices";
import './fullPost.css'

class FullPosts extends Component {
		state = {posts: null}
		postService = new PostServices()

		async componentDidMount() {
				 let {match:{params:{id}}} = this.props
			let posts =	await this.postService.getPostById(id)
				this.setState({posts})
		}

		render() {
				let{posts}=this.state
				return (
						<div>
								{posts&&<div className={'fullPost'}>{posts.id}-{posts.title}</div>}
						</div>
				);
		}
}

export default FullPosts;