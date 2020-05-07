import Book from './book.js';

class Library {
    constructor() {
        this.storage = window.localStorage;
        this.table = document.getElementsByClassName('library')[0];
        this.books = [];
        if(this.storage.getItem('library') !== null) {
            let data = JSON.parse(this.storage.getItem('library'));
            for(let book of data) {
                this.books.push(new Book(book.title, book.author, book.pages, book.alreadyRead));
            }
        }
        this.idNumber = 0;
    }

    clearTable() {

    }

    addRow(book) {
        let row = book.toTableRow();
        this.table.appendChild(row);
        let removeButton = row.getElementsByTagName('button')[0];
        removeButton.addEventListener('click', e => {
            this.removeFromStore(book);
            this.table.removeChild(row);
        });
    }

    render() {
        for(let book of this.books) {
            this.addRow(book);
        }
    }

    removeFromStore(book) {
        let idx = this.books.indexOf(book);
        this.books.splice(idx, 1);
        this.storage.setItem('library', JSON.stringify(this.books));
    }

    addBook(book) {
        this.books.push(book);
        this.storage.setItem('library', JSON.stringify(this.books));
    }
}

export default Library;