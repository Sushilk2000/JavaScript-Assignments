// OOPs day 2 Homework

class Book {
    constructor(title, author, availability = true) {
        this.title = title;
        this.author = author;
        this.availability = availability;
    }
}

class LibraryMember {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.borrowedBooks = [];
    }

    borrowBook(book) {
        if (book.availability) {
            book.availability = false;
            this.borrowedBooks.push(book);
            console.log(`${this.name} has borrowed "${book.title}" by ${book.author}.`);
        } else {
            console.log(`Sorry, "${book.title}" is currently not available.`);
        }
    }

    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            book.availability = true;
            this.borrowedBooks.splice(index, 1);
            console.log(`${this.name} has returned "${book.title}" by ${book.author}.`);
        } else {
            console.log(`${this.name} did not borrow "${book.title}".`);
        }
    }

    displayBorrowedBooks() {
        console.log(`${this.name}'s borrowed books:`);
        this.borrowedBooks.forEach(book => {
            console.log(`- ${book.title} by ${book.author}`);
        });
    }
}

class LibraryStaff {
    constructor() {
        // Library staff may have additional properties or methods
    }

    addBook(library, title, author) {
        const newBook = new Book(title, author);
        library.books.push(newBook);
        console.log(`"${title}" by ${author} has been added to the library.`);
    }

    removeDamagedBook(library, book) {
        const index = library.books.indexOf(book);
        if (index !== -1) {
            library.books.splice(index, 1);
            console.log(`"${book.title}" by ${book.author} has been removed from the library due to damage.`);
        } else {
            console.log(`"${book.title}" by ${book.author} not found in the library.`);
        }
    }
}

class Library {
    constructor() {
        this.books = [];
    }
}


const myLibrary = new Library();
const librarian = new LibraryStaff();

librarian.addBook(myLibrary, 'The Great Gatsby', 'F. Scott Fitzgerald');
librarian.addBook(myLibrary, 'To Kill a Mockingbird', 'Harper Lee');

const member1 = new LibraryMember('Alice', 'alice@example.com');
const member2 = new LibraryMember('Bob', 'bob@example.com');

member1.borrowBook(myLibrary.books[0]);
member1.borrowBook(myLibrary.books[1]);
member2.borrowBook(myLibrary.books[1]);

member1.returnBook(myLibrary.books[0]);
member2.returnBook(myLibrary.books[1]);


member1.displayBorrowedBooks();
member2.displayBorrowedBooks();