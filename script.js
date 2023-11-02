const myLibrary = [];

function Book(title, author, numberOfPages) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
}

function addBookToLibrary() {
  const title = prompt("Please enter the Title of the new Book");
  const author = prompt("Please enter the Author of the new Book");
  const pages = prompt("Please enter the Number of pages of the new Book");
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
}

addBookToLibrary();
console.table(myLibrary);
