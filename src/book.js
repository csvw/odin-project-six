class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.alreadyRead = read;
    }

    toTableRow() {
        let row = document.createElement('tr');
        for(let prop in this) {
            let td = this.buildTableCell(this[prop]);
            row.appendChild(td);
        }
        return row;
    }

    buildTableCell(text) {
        let td = document.createElement('td');
        let textNode = document.createTextNode(text);
        td.appendChild(textNode);
        return td;
    }
}

export default Book;