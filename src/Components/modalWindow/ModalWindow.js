import React, {useState} from 'react'
import ModalWindow from "./ModalWindow";
import ChangeUserComponent from "../users/ChangeUserComponent";

export default function ModifyUser ({id, name, age}){
		console.log(id)
		let [flag,setFlag] = useState(false);
		const modifyHandler = (event) =>{
				event.preventDefault();
				if(flag){
						setFlag(flag=> !flag)
				}
				else {
						setFlag(flag=>!flag)
				}

				// console.log(flag)

		}


		return (
				<div>
						<form onSubmit={modifyHandler}>
								<button>Modify</button>
						</form>
						{
								flag && <ChangeUserComponent id={id} name={name} age={age}/>
						}

				</div>
		);
}