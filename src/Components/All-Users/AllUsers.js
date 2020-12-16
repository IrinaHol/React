import React, {Component} from 'react';
import UserServices from "../Services/UserServices";
import User from "../User/User";
import {Route, Switch, withRouter} from "react-router-dom";
import ChosenUser from "../ChosenUser/ChosenUser";
import AllPosts from "../All-Posts/AllPosts";
import './AllUsers.css'

class AllUsers extends Component {
		state = {users: [], chosenPost: null}
		userServices = new UserServices();

		async componentDidMount() {
				let users = await this.userServices.getAllUsers()
				this.setState({users})
		}

		selectPost = (id) => {
				let chosenPost = this.state.users.find(value => value.id === id)
				this.setState({chosenPost})

		}

		render() {
				const {users, chosenPost} = this.state

				return (
						<div>
								<div className={'center'}>
										<p className='users-header'>Users</p>
										<div className={'users'}>
												{users.map(value =>
														<User item={value} key={value.id} selectPost={this.selectPost}/>)
												}
										</div>
										<div className={'chosen'}>
												{chosenPost && <ChosenUser chosenUsers={chosenPost}/>}
										</div>
								</div>
								<Switch>

										<div className={'post'}>

												<Route path={`/users/:id`} render={(props) => {
														let {match: {params: {id}}} = props
														return (<AllPosts id={id} key={id}/>)
												}}/>
										</div>

								</Switch>

								<div>


								</div>
						</div>
				);
		}
}


export default withRouter(AllUsers);