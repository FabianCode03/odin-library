// selectors and variable definitions
const myLibrary = [];
const modal = document.querySelector(".modal");
const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".cancel");
const submitButton = document.querySelector(".add");
const form = document.querySelector("#form");
const toggleRead = document.querySelectorAll(".read");
const bookDisplay = document.querySelector(".book-display");

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
  addBookToDom(newBook);
  form.reset();
  modal.close();
}

function changeReadStatus(e) {
  if (e.target.classList.contains("read")) {
    e.target.classList.remove("read");
    e.target.classList.add("notRead");
    e.target.textContent = "Not Read";
  } else {
    e.target.classList.remove("notRead");
    e.target.classList.add("read");
    e.target.textContent = "Read";
  }
}

function addBookToDom(book) {
  let bookTemplate = `
  <div class="book">
  <h1 class="book-title">${book.title}</h1>
  <p class="book-author">Author: ${book.author}</p>
  <p class="book-pages">Pages: ${book.numberOfPages}</p>
  <button class="${book.read ? "read" : "notRead"}">${
    book.read ? "Read" : "Not Read"
  }</button>
  <button class="removeBook">Remove</button>
  </div>
`;

  // Fügen Sie das Buch-Template als neues Kind-Element ein
  bookDisplay.insertAdjacentHTML("beforeend", bookTemplate);

  // Fügen Sie den Event-Listener zum zuletzt hinzugefügten "Read"-Button hinzu
  let readButtons = document.querySelectorAll(".read, .notRead");
  let lastReadButton = readButtons[readButtons.length - 1];
  lastReadButton.addEventListener("click", e => changeReadStatus(e));
}

// event listeners
submitButton.addEventListener("click", e => addBook(e));
openModal.addEventListener("click", () => modal.showModal());
closeModal.addEventListener("click", () => modal.close());
