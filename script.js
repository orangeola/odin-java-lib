const container = document.getElementById("container");
const addButton = document.getElementById("addBookPopup");
const bookContainer = document.getElementById('newBookContainer');

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    display();
}

function display() {
    container.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++) {
        let newBook = document.createElement("div");
        let dTitle = document.createElement("p");
        let dAuthor = document.createElement("p");
        let dPages = document.createElement("p");
        let dRead = document.createElement("p");
        let removeButton = document.createElement("button");

        dTitle.innerText = myLibrary[i].title;
        newBook.appendChild(dTitle);

        dAuthor.innerText = myLibrary[i].author;
        newBook.appendChild(dAuthor);

        dPages.innerText = myLibrary[i].pages;
        newBook.appendChild(dPages);

        dRead.innerText = myLibrary[i].read;
        newBook.appendChild(dRead);

        newBook.appendChild(removeButton);
        container.appendChild(newBook);  
    }
}

document.addEventListener('click', function handleClickOutsideBox(event) {
    const box = document.getElementById('newBook');
  
    if (!box.contains(event.target)) {
        hide();
    }
    if(event.target === addButton){
        show()
   }
});

function hide()
{
    const boxContainer = document.getElementById('newBookContainer');
    boxContainer.style.display = 'none';
    document.forms['bookForm'].reset()
}

function show()
{
    const boxContainer = document.getElementById('newBookContainer');
    boxContainer.style.display = 'flex';
}
