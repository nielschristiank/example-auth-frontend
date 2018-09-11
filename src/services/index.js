const BASE = "http://localhost:3001"

export const Register = (user) => {

	return fetch(BASE + "/users", {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user),
	})
	.then(response => {
		let json = response.json()
		return json
	})
}
