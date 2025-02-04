// const _bookName = new WeakMap();
// const _bookAuthor = new WeakMap();
// const _bookGenre = new WeakMap();
// const _bookIsAvailable = new WeakMap();



class Book{
    
    constructor(bookAuthor,bookName,bookGenre,IsAvailable) {
        
        this.bookId = 0;
        this.bookAuthor = bookAuthor;
        this.bookGenre = bookGenre;
        this.bookName = bookName;
        this.isAvailable = IsAvailable;
 
    }


}

module.exports = Book;

