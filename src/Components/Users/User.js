// import React, {Component} from 'react';
// import UserService from "./User-Service";
//
//
// class User extends Component {
//
// 		usersService = new UserService()
//
// 		state = {Users: []}
//
// 		componentDidMount() {
// 				let {id} = this.props;
// 				this.usersService.getUserById(id).then(value => this.setState({Users: value}))
//
// 		}
//
// 		render() {
// 				let {Users} = this.state;
// 				return (
// 						<div>
// 								<div>
// 										<div><h5>Name: {Users.name}</h5></div>
// 										<div><h5>Username: {Users.username}</h5></div>
// 										<div><h5>Mail: {Users.email} </h5></div>
// 								</div>
// 						</div>
// 				);
// 		}
// }
//
// export default User;

// import React, {useEffect} from 'react'
//
//
//
// export default function User(props) {
//
// 		useEffect(()=>{
// 				console.log('delete');
// 		},[])
//
// 		let {item,onDeleteUser} = props;
// 		return (
// 				<div>
// 						{item.id}-{item.name}
// 						<button onClick={()=>{
// 								onDeleteUser(item.id)
// 						}}>delete</button>
// 				</div>
// 		)
// }