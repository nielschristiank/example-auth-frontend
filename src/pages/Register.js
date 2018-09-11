import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

import { Register } from '../services'

class RegisterPage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			registerSuccess: false,
			form: {
				user: {
					firstName: "test",
					lastName: "test1",
					email: "test@example.com",
					password: "123134",
				}
			}
		}
	}

	render() {
		let { firstName, lastName, email, password } = this.state.form.user
		return (
			<main>
				<h2>Welcome! Register here.</h2>
				<form onSubmit={this.onSubmit}>
					<input
						type="text"
						name="firstName"
						value={firstName}
						onChange={this.onChange}
					/>
					<input
						type="text"
						name="lastName"
						value={lastName}
						onChange={this.onChange}
					/>
					<input
						type="email"
						name="email"
						value={email}
						onChange={this.onChange}
					/>
					<input
						type="password"
						name="password"
						value={password}
						onChange={this.onChange}
					/>
					<button onSubmit={this.onSubmit}>Register</button>
				</form>
				{this.state.registerSuccess && <Redirect to="#" />}
			</main>
		)
	}

	onChange = (e) => {
		let { form } = this.state

		form.user[e.target.name] = e.target.value

		this.setState({ form })
	}

	onSubmit = (e) => {
		e.preventDefault()

		Register(this.state.form)
		.then(json => {
			console.log("Got to second then:", json);
			this.setState({
				registerSuccess: true
			})
		})
	}
}

export default RegisterPage
