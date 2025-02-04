// const _transactionDate = new WeakMap();
// const _bookId = new WeakMap();
// const _borrowerId = new WeakMap();
// const _isBorrowed = new WeakMap();


class Transaction{
    constructor(bookId, borrowerId, isBorrowed) {
        
        this.transactionId = 0;
        this.transactionDate = 0;
        this.borrowerId = borrowerId;
        this.bookId = bookId;
        // _bookId.set(this, bookId);
        // _borrowerId.set(this, borrowerId);
        // _isBorrowed.set(this, isBorrowed);
    }

    // getBookId() {
    //     return _bookId.get(this);
    // }

    // getBorrowId() {
    //     return _borrowerId.get(this);
    // }

    // isBookBorrowed() {
    //     return _isBorrowed.get(this);
    // }
}


module.exports = Transaction;