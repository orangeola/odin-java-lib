const container = document.getElementById("container");
const addButton = document.getElementById("test");

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let newBook = new Book("Moby Dick", "Orwell", "45", false);
    myLibrary.push(newBook);
    display();
}

function display() {
    container.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++) {
        let newDiv = document.createElement("div");
        let p = document.createElement("p");
        p.innerText = myLibrary[i].title;
        newDiv.appendChild(p);
        container.appendChild(newDiv);  
    }
}

addButton.addEventListener('click', addBookToLibrary);