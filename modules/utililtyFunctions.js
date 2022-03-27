import books from './Books.js';
import * as Elements from './constElements.js';

console.log(books);

const createContent = () => {
  Elements.booksList.innerHTML = '';
  books.BooksObject.forEach((obj) => {
    // const divContainer = document.createElement('div');
    // const divBook = document.createElement('div');
    // const h4 = document.createElement('h4');
    // const h3 = document.createElement('h3');
    // const button = document.createElement('button');

    // divContainer.className = 'book-container';
    // h4.className = 'text-1';
    // h3.className = 'text-1';
    // button.className = 'btn';
    // button.classList.add('deleteBtn');
    // button.innerText = 'Remove';

    // divBook.className = 'book';
    // divContainer.appendChild(divBook);
    // divBook.appendChild(h4);
    // divBook.appendChild(h3);
    // divContainer.appendChild(button);

    // booksList.appendChild(divContainer);
    // h4.innerHTML = `${obj.title}`;
    // h3.innerHTML = `by ${obj.author}`;
    // button.setAttribute('data-id', `${obj.id}`);

    Elements.booksList.innerHTML += `<div class="book-container">
                    <div class="book">
                      <h4 class="text-1">"${obj.title}"</h4>
                      <h3 class="text-1">by ${obj.author}</h3>
                    </div>
                    <button type="button" class="btn deleteBtn" data-id="${obj.id}">Remove</button>
                </div>`;
  });
};

function checkLocalStorage() {
  if (JSON.parse(localStorage.getItem('BOOKS_LIST')) != null) {
    books.BooksObject = JSON.parse(localStorage.getItem('BOOKS_LIST'));
    createContent();
  }
}

const addBook = () => {
  books.add(Elements.book, Elements.author);
  checkLocalStorage();
  Elements.booksList.parentElement.classList.remove('hide');
  Elements.author.parentElement.parentElement.classList.add('hide');
  Elements.contactInfo.classList.add('hide');
};

const removeBook = (element) => {
  books.remove(element);
};

export { addBook, removeBook, checkLocalStorage };
