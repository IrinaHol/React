import React, {Component} from 'react';

class Users extends Component {
		state={user:null, inputValue:''}



		commitState=(e)=>{
				this.setState({inputValue: e.target.value})
		}


onFormSubmit=(e)=>{
				e.preventDefault();
				if (this.state.inputValue>0 && this.state.inputValue<=10) {
						fetch(`https://jsonplaceholder.typicode.com/users/${this.state.inputValue}`)
								.then(value => value.json())
								.then(value => {
										this.setState({user: value})
								})

				}
				else {
						this.setState({user: {name: 'Користувача з таким індетифікатором не знайдено'}})
				}
		}

		render() {
				let {user,inputValue} = this.state;

				return (
						<div>
								<form action={'/ok'} onSubmit={this.onFormSubmit}>
										<input type={'number'} onInput={this.commitState} value={inputValue}/>
										<button>OK</button>
								</form>
								<div>
										{
												user && <div>{user.name}/{user.username}</div>
										}

								</div>
						</div>
				);
		}
}

export default Users;