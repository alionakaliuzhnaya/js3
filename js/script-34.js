const bookShelf = {
  // Change code below this line
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`;
  },
  // Change code above this line
};

console.log(bookShelf.getBooks()); // "Возвращаем все книги"
console.log(bookShelf.addBook("Haze")); // "Adding book Haze"
console.log(bookShelf.removeBook("Red sunset")); //"Deleting book Red sunset"
console.log(bookShelf.updateBook("Sands of dune", "Dune")); //"Updating book Sands of dune to Dune"
