import React, {Component} from 'react';
import Men from "./Components/Men&women/Men";
import Women from "./Components/Men&women/Women";
import './App.css'
import MarriedCouples from "./Components/Men&women/MarriedCouples";
class App extends Component {
		render() {
				return (
						<div className={'position'}>
								<div className={'box'}>	<Men/></div>
							 <div className={'box'}><Women/></div>
								<div className={'box'}><MarriedCouples/></div>

						</div>
				);
		}
}

export default App;
