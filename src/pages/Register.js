import React, { Component } from 'react'

class Register extends Component {
	constructor(props) {
		super(props)

		this.state = {
			user: {
				firstName: "test",
				lastName: "test1",
				email: "test@example.com",
				password: "123134",
			}
		}
	}

	render() {
		let { firstName, lastName, email, password } = this.state.user
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
			</main>
		)
	}

	onChange = (e) => {
		let { user } = this.state

		user[e.target.name] = e.target.value

		this.setState({ user })
	}

	onSubmit = (e) => {
		e.preventDefault()
		console.log(this.state);
	}
}

export default Register
