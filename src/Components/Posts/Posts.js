import React, {Component} from 'react';
import Post from "../Post/Post";
import {PostService} from "../../Services/PostService";

class Posts extends Component {
		postService = new PostService();
		state = {posts:[], chosePost: null}

		functionChosePost=(id)=>{
				this.postService.getPostByID(id).then(value => this.setState({chosePost: value}))
		}


		componentDidMount() {
				this.postService.getAllPosts().then(value => this.setState({posts:value}));
		}

		render() {
				let {posts,chosePost} = this.state
				return (
						<div>
								{
										posts.map(value => <Post
												item={value}
												key={value.id}
												functionChosePost={this.functionChosePost}
										/>)
								}
								<h3>
								{
										chosePost && <Post item={chosePost} isShowButton={true}/>
								}
								</h3>
						</div>
				);
		}
}
export default Posts;