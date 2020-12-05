
export class CommentServices {
		url = 'https://jsonplaceholder.typicode.com/comments'

		getAllComments = () => {
			return fetch(this.url)
						.then(value => value.json())
						.then(value => value)

		}
		getCommentById (id){
				return fetch(`${this.url}/${id}`)
						.then(value => value.json())
								.then(value1 => value1)
		}



		findCommentById  (comments = [], id) {
return comments.find(value => value.id === id)

		}

}