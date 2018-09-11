import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Register from './pages/Register'

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route path="/register" component={Register} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
