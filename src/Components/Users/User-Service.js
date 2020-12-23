export default class UserService{
		url = 'https://jsonplaceholder.typicode.com/user'


		// 	getUserById (id) {
		// 		return fetch(this.url + `/${id}`).then(value => value.json())
		// }
		getUserById () {
				return fetch(this.url).then(value => value.json()).then(value => value)
		}
}