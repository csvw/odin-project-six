import Library from './library.js';
import Form from './form.js';

document.body.onload = init;

function init() {
    let myLibrary = new Library();
    let form = new Form();
    form.registerLibrary(myLibrary);
    myLibrary.render();
}

