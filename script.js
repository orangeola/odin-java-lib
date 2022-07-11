const container = document.getElementById("container");
const addButton = document.getElementById("test");
const bookContainer = document.getElementById('newBookContainer');

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
        let but = document.createElement("button");
        p.innerText = myLibrary[i].title;
        newDiv.appendChild(p);
        newDiv.appendChild(but);
        container.appendChild(newDiv);  
    }
}

document.addEventListener('click', function handleClickOutsideBox(event) {
    const box = document.getElementById('newBook');
    const boxContainer = document.getElementById('newBookContainer');
  
    if (!box.contains(event.target)) {
        hide();
    }
    if(event.target === addButton){
        boxContainer.style.display = 'flex';
   }
  });

function hide()
{
    const boxContainer = document.getElementById('newBookContainer');
    boxContainer.style.display = 'none';
    document.forms['bookForm'].reset()
}

addButton.addEventListener('click', () => {
    const boxContainer = document.getElementById('newBookContainer');
    boxContainer.style.display = 'flex';
});