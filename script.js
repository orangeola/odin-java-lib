const container = document.getElementById("container");
const addButton = document.getElementById("addBookPopup");
const bookContainer = document.getElementById('newBookContainer');

class Book{
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

const Library = class {
    myLibrary = [];

    addBookToLibrary(title, author, pages, read) {
        let newBook = new Book(title, author, pages, read);
    
        if(this.myLibrary.length === 0){
            console.log(newBook.title);
            this.myLibrary.push(newBook);
            this.displayOne(this.myLibrary.length-1);
            hide();
        }
        else 
        {
            for(let i = 0; i < this.myLibrary.length; i++)
            {
                if(newBook.title === this.myLibrary[i].title && newBook.author === this.myLibrary[i].author)
                {
                    console.log(newBook.title);
                    console.log(this.myLibrary[i].title);
                    const form = document.getElementById("title");
                    form.classList.add("bookExists");
                    break;
                } 
                else if(i === this.myLibrary.length-1)
                {
                    this.myLibrary.push(newBook);
                    this.displayOne(this.myLibrary.length-1);
                    hide();
                    break;
                }
            }
        }
    }

    displayOne(index) {
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
                this.updateIndex(newBook.dataset.index);
                this.myLibrary.splice(newBook.dataset.index, 1);
            });
    
            let readButton = document.createElement("button");
            readButton.innerText = "Change Read Status";
    
            readButton.addEventListener('click', ()=> {
                let bool = document.getElementsByClassName("readOrNot")[newBook.dataset.index];
                this.myLibrary[newBook.dataset.index].read = !this.myLibrary[newBook.dataset.index].read;
                if(bool.innerText === "Not Read")
                {
                    bool.innerText = "Read";
                } else {
                    bool.innerText = "Not Read";
                }
            });
    
            dTitle.innerText = this.myLibrary[index].title;
            newBook.appendChild(dTitle);
    
            dAuthor.innerText = this.myLibrary[index].author;
            newBook.appendChild(dAuthor);
    
            dPages.innerText = this.myLibrary[index].pages;
            newBook.appendChild(dPages);
    
            dRead.innerText = this.myLibrary[index].read;
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

    updateIndex(toDelete)
    {
        for(let i = parseInt(toDelete) + 1; i<this.myLibrary.length; i++)
        {
            console.log(i);
            console.log(this.myLibrary[i]);
            const el1 = document.querySelector(`[data-index="${i}"]`);
            el1.dataset.index = i-1;
        }
    }

}

const newLib = new Library();

function addBook(title, author, pages, read){
    newLib.addBookToLibrary(title, author, pages, read);
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

function bookAlreadyExists()
{
    const form = document.getElementById("title");
    form.classList.remove("bookExists");
}