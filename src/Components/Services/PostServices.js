export default class PostServices{

		urlPost='https://jsonplaceholder.typicode.com/posts?userId='
		async getAllPosts(id){
				return await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
						.then(value => value.json())
		}


}