class Library {
    constructor() {
        this.table = document.getElementsByClassName('library')[0];
        this.books = [];
    }

    render() {
        for(let book of this.books) {
            let row = book.toTableRow();
            this.table.appendChild(row);
        }
    }

    addBook(book) {
        this.books.push(book);
    }
}

export default Library;