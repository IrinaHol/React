export default class UserServices {
		url = 'https://jsonplaceholder.typicode.com/users'

		async getAllUsers() {
				return await fetch(this.url)
						.then(value => value.json())
		}
		//
		// async getByOneUser(id) {
		// 		return await fetch(`${this.url}/${id}`)
		// 				.then(value => value.json())
		//
		//
		// }
}