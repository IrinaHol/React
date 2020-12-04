import React, {Component} from 'react';
import MansComponents from "./components/mans_women/MansComponents";
import WomensComponents from "./components/mans_women/WomensComponents";
import './App.css'
import MarriedCouples from "./components/mans_women/MarriedCouples";

class App extends Component {
		state = {
				man: [
						{id: 1, name: 'Oleg', age: 23, wife_id: 5},
						{id: 2, name: 'Nik', age: 18, wife_id: 2},
						{id: 3, name: 'Ivan', age: 34, wife_id: 6},
						{id: 4, name: 'Kolya', age: 99, wife_id: 3},
						{id: 5, name: 'Vitalic', age: 45, wife_id: 1},
						{id: 6, name: 'Dima', age: 33, wife_id: 4}
				],

				women: [
						{id: 1, name: 'Ira', age: 43, husband_id: 2},
						{id: 2, name: 'Nadia', age: 18, husband_id: 1},
						{id: 3, name: 'Kate', age: 24, husband_id: 5},
						{id: 4, name: 'Dina', age: 19, husband_id: 3},
						{id: 5, name: 'Olia', age: 15, husband_id: 6},
						{id: 6, name: 'Nadia', age: 23, husband_id: 4}
				],

				couples: []
		}

		showCouples = () => {
				const couples = [];
				this.state.man.forEach(man => {
						this.state.women.forEach(women => {
								if (man.wife_id === women.husband_id) {
										couples.push([man, women])
								}
						});
				});

				this.setState({
						couples
				})
		}

		render() {
				return (
						<div className={'display'}>
								<button className={'btnStyle'} onClick={this.showCouples}>Show couples</button>

								<div className={'block'}><MansComponents mans={this.state.man}/></div>
								<div className={'block'}><WomensComponents womens={this.state.women}/></div>
								<div className={'block'}><MarriedCouples couples={this.state.couples}/></div>

						</div>
				);
		}
}

export default App;
