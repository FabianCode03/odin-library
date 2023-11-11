// selectors and variable definitions
const myLibrary = [];
const modal = document.querySelector(".modal");
const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".cancel");
const submitButton = document.querySelector(".add");
const form = document.querySelector("#form");

// constructor
function Book(title, author, numberOfPages, read) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.read = read;
}

function addBook(e) {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let numberOfPages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;

  const newBook = new Book(title, author, numberOfPages, read);
  myLibrary.push(newBook);
  console.table(myLibrary);
}
// event listeners
submitButton.addEventListener("click", e => addBook(e));
openModal.addEventListener("click", () => modal.showModal());
closeModal.addEventListener("click", () => modal.close());
