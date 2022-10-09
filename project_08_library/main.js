function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const libraryTableBody = document.getElementsByTagName("tbody")[0];
const formSubmit = document.getElementById("form-submit");
const formTitle = document.getElementById("title");
const formAuthor = document.getElementById("author");
const formPages = document.getElementById("pages");
const formRead = document.getElementById("read-yes");

function appendBook(book){
  const newBook = document.createElement("tr");
  newBook.classList.add("tag-row");

  const newBookTitle = document.createElement("td");
  newBookTitle.appendChild(document.createTextNode(book.title));

  const newBookAuthor = document.createElement("td");
  newBookAuthor.appendChild(document.createTextNode(book.author));

  const newBookPages = document.createElement("td");
  newBookPages.appendChild(document.createTextNode(book.pages));

  const newBookRead = document.createElement("td");
  const newBookReadInput = document.createElement("input");
  newBookReadInput.type = "checkbox";
  newBookReadInput.name = "read-toggle";
  newBookReadInput.checked = book.read;

  const newBookReadLabel = document.createElement("label");
  newBookReadLabel.appendChild(document.createTextNode(book.read ? "Yes" : "No"));
  newBookRead.addEventListener("click",handleToggleRead);
  
  newBookRead.appendChild(newBookReadInput);
  newBookRead.appendChild(newBookReadLabel);

  const newBookDelete = document.createElement("td");
  const newBookDeleteButton = document.createElement("button");
  newBookDeleteButton.appendChild(document.createTextNode("Delete"));  
  newBookDeleteButton.classList.add("button")
  newBookDeleteButton.addEventListener("click",handleDelete);
  newBookDelete.appendChild(newBookDeleteButton);

  newBook.appendChild(newBookTitle);
  newBook.appendChild(newBookAuthor);
  newBook.appendChild(newBookPages);
  newBook.appendChild(newBookRead);
  newBook.appendChild(newBookDelete);

  libraryTableBody.appendChild(newBook);
  console.log(newBook);
}

const handleFormSubmit = (e) =>{
  const formBook = new Book(formTitle.value,formAuthor.value,formPages.value,formRead.checked);
  appendBook(formBook);
  e.preventDefault();
}

const handleDelete = (e) =>{
  e.target.parentElement.parentElement.remove()
}

const handleToggleRead = (e) =>{
  e.currentTarget.children[0].checked ? e.currentTarget.children[1].innerHTML = "Yes" : e.currentTarget.children[1].innerHTML = "No";
}


let CODE = new Book("CODE : The Hidden Language Of Computer Hardware and Software","Charles Petzold","382",false);

let TheUXTeamOfOne = new Book("The User Experience Team Of One","Leah Buley","235",true);

let ThePragmaticProgrammer = new Book("The Pragmatic Programmer","David Thomas","306",false);

appendBook(CODE);
appendBook(TheUXTeamOfOne);
appendBook(ThePragmaticProgrammer);

formSubmit.addEventListener("click",handleFormSubmit);
