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

    if(myLibrary.length === 0){
        console.log(newBook.title);
        myLibrary.push(newBook);
        displayOne(myLibrary.length-1);
        hide();
    }
    else 
    {
        for(let i = 0; i < myLibrary.length; i++)
        {
            if(newBook.title === myLibrary[i].title && newBook.author === myLibrary[i].author)
            {
                console.log(newBook.title);
                console.log(myLibrary[i].title);
                const form = document.getElementById("title");
                form.classList.add("bookExists");
                break;
            } 
            else if(i === myLibrary.length-1)
            {
                myLibrary.push(newBook);
                displayOne(myLibrary.length-1);
                hide();
                break;
            }
        }
    }
    //myLibrary.push(newBook);
    //displayOne(myLibrary.length-1);
}

function displayOne(index) {
    let newBook = document.createElement("div");
        newBook.dataset.index = index;
        let dTitle = document.createElement("p");
        let dAuthor = document.createElement("p");
        let dPages = document.createElement("p");
        let dRead = document.createElement("p");
        dRead.setAttribute("class","readOrNot");

        let removeButton = document.createElement("button");
        removeButton.innerText = "Remove";

        removeButton.addEventListener('click', ()=> {
            newBook.remove();
            updateIndex(newBook.dataset.index);
            myLibrary.splice(newBook.dataset.index, 1);
        });

        let readButton = document.createElement("button");
        readButton.innerText = "Change Read Status";

        readButton.addEventListener('click', ()=> {
            let bool = document.getElementsByClassName("readOrNot")[newBook.dataset.index];
            myLibrary[newBook.dataset.index].read = !myLibrary[newBook.dataset.index].read;
            if(bool.innerText === "Not Read")
            {
                bool.innerText = "Read";
            } else {
                bool.innerText = "Not Read";
            }
        });

        dTitle.innerText = myLibrary[index].title;
        newBook.appendChild(dTitle);

        dAuthor.innerText = myLibrary[index].author;
        newBook.appendChild(dAuthor);

        dPages.innerText = myLibrary[index].pages;
        newBook.appendChild(dPages);

        dRead.innerText = myLibrary[index].read;
        if(dRead.innerText === "true"){
            dRead.innerText = "Read";
        } else {
            dRead.innerText = "Not Read";
        }
        newBook.appendChild(dRead);

        newBook.appendChild(removeButton);
        newBook.appendChild(readButton);
        newBook.classList.add("card");
        container.appendChild(newBook);
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
    bookAlreadyExists();
}

function show()
{
    const boxContainer = document.getElementById('newBookContainer');
    boxContainer.style.display = 'flex';
}

function updateIndex(toDelete)
{
    for(let i = parseInt(toDelete) + 1; i<myLibrary.length; i++)
    {
        console.log(i);
        console.log(myLibrary[i]);
        const el1 = document.querySelector(`[data-index="${i}"]`);
        el1.dataset.index = i-1;
    }
}

function bookAlreadyExists()
{
    const form = document.getElementById("title");
    form.classList.remove("bookExists");
}