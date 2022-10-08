console.log('Library ');

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
 
let Harry = new Book("harry","jk","400",true);
Harry.info();