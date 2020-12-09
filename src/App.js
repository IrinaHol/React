import React, {Component} from 'react';
import Comments from "./all-comments/comments";
import Posts from "./all-posts/posts";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import './App.css'


class App extends Component {
		render() {
				return (
						<Router>
						<div className={'block'}>
								<ul>
										<li className={'post-style'}>
												<Link to={'/posts'}>ALL_POSTS</Link>
										</li>
								</ul>
								<ul>
										<li className={'post-style'}>
												<Link to={'/comments'}>ALL_COMMENTS</Link>
										</li>
								</ul>
								<hr/>
								<Switch>
										<Route path={'/posts'} render={()=><Posts/>}/>
										<Route path={'/comments'} render={()=><Comments/>}/>
								</Switch>

						</div>
						</Router>
				);
		}
}

export default App;
