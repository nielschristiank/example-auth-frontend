import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Register from './pages/Register';
import User from './pages/User';
import Home from './pages/Home';

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route exact path="/register" component={Register} />
						<Route exact path="/user" component={User} />
						<Route exact path="/" component={Home} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
