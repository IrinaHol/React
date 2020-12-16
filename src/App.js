import React, {Component} from 'react';
import AllUsers from "./Components/All-Users/AllUsers";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import './App.css'

class App extends Component {
		render() {
				return (
						<nav className='main-box'>
						<Router>
								<div className='header'>
										<div className={'logo'}><img  src=" https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="logo"/></div>
										<Link className={'link'} to={'/'}>Home </Link>
										<Link className={'link'} to={'/users'}>Users </Link>
								</div>
								<Switch>
										<Route path={'/users'} render={()=>{return(<AllUsers/>)}}/>

								</Switch>
						</Router>
						</nav>
				);
		}
}

export default App;
