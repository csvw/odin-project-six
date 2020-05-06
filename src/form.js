import Book from './book.js';

class Form {
    constructor() {
        this.formContainer = document.getElementsByClassName('book-form')[0];
        this.form = document.getElementsByClassName('book-form')[0];
        this.initAddButton();
        this.initForm();
        this.initSubmit();
        this.initCancel();
    }

    initAddButton() {
        this.addButton = document.getElementsByClassName('add-book')[0];
        this.addButton.addEventListener('click', e => {
            this.addButton.classList.add('hidden');
            this.formContainer.classList.remove('hidden');
        });
    }

    initForm() {
        this.authorInput = document.getElementById('author');
        this.titleInput = document.getElementById('title');
        this.pagesInput = document.getElementById('pages');
        this.alreadyReadInput = document.getElementById('read');
    }

    initSubmit() {
        this.submit = document.getElementById('submit');
    }

    initCancel() {
        this.cancel = document.getElementById('cancel');
        this.cancel.addEventListener('click', e => {
            this.clearFields();
            this.addButton.classList.remove('hidden');
            this.formContainer.classList.add('hidden');
        });
    }

    clearFields() {
        this.authorInput.textContent = '';
            this.titleInput.textContent = '';
            this.pagesInput.textContent = '';
            this.alreadyReadInput.checked = false;
    }

    registerLibrary(library) {
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            let title = this.titleInput.value;
            let author = this.authorInput.value;
            let pages = this.pagesInput.value;
            let read = this.alreadyReadInput.checked;
            let book = new Book(title, author, pages, read);
            library.addBook(book);
            library.render();
        });
    }
}

export default Form;