const Book = {};

Book.create = function (name, author) {
	console.log(`${author} =>this author is wirtten this book : ${name}`)

}

module.exports = Book;