console.log('Library ');

const library = [];

function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function() {
  console.log("BOOK INFO::");
  console.log(this.title,this.author,this.pages,this.read);
}

function addBookToLibrary(book) {
  library.push(book);
}

function removeFromLibrary(bookToRemove) {
  let  index = library.findIndex(book => book.title === bookToRemove.title);
  library.splice(index,1);
  console.log("removing 1 item at index :: " +index );
}

function toggleRead(book) {
  book.read = !book.read;
}

let Harry = new Book("harry","jk","400",true);
let Barry = new Book("barry","bk","600",false);
Harry.info();

addBookToLibrary(Harry);
addBookToLibrary(Barry);
removeFromLibrary(Harry);

console.log(library);