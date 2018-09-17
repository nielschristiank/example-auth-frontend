import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AuthService from './services'
import Register from './pages/Register';
import User from './pages/User';
import Home from './pages/Home';

class App extends Component {
	render() {
		let auth = new AuthService();
		return (
			<div>
				<Router>
					{(auth.loggedIn() === true)
						?
						<Switch>
							<Route exact path="/register" component={Register} />
							<Route exact path="/user" token={auth.getToken()} component={User} />
							<Route exact path="/" component={Home} />
						</Switch>
						:
						<Switch>
							<Route exact path="/register" component={Register} />
							<Route exact path="/user" component={Register} />
							<Route exact path="/" component={Home} />
						</Switch>}
				</Router>
			</div>
		);
	}
}

export default App;
