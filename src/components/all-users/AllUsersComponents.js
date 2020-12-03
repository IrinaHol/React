import React, {Component} from 'react';
import UserComponents from "../user/UserComponents";
import './users.css'

class AllUsersComponents extends Component {
state = {users: [], classState:'one', chosenUser: null};
flag = false

		componentDidMount() {
				fetch('https://jsonplaceholder.typicode.com/posts')
						.then(value => value.json())
						.then(myUser => {
								this.setState({users:myUser});
						})
		}

		changeColor=()=>{
				if (this.flag){
						this.setState({classState:'one'})
				}else{
						this.setState({classState:'two'})
				}
				this.flag =!this.flag
		}
		selectThisUser = (id)=> {
		let chosenUser = this.state.users.find(value => value.id ===id);
		this.setState({chosenUser});
		}

		render() {
				let{users,classState,chosenUser} = this.state
				return (
						<div>

								<h1 onClick={this.changeColor} className={classState}>CLICK</h1>
								{
users.map(value =>
		(<UserComponents
				item = {value}
				key ={value.id}
		selectThisUser = {this.selectThisUser}
		/>))
								}

								<hr/>
								{ chosenUser&& <UserComponents item = {chosenUser}/>}
						</div>
				);
		}
}

export default AllUsersComponents;