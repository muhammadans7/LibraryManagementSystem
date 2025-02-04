// const _borrowerName = new WeakMap();
// const _borrowerEmail = new WeakMap();

class Borrower{

    constructor(borrowerName, borrowerEmail) {

        this.borrowerId = 0;
        this.borrowerName = borrowerName;
        this.borrowerEmail = borrowerEmail;
        // _borrowerName.set(this, borrowerName);
        // _borrowerEmail.set(this, borrowerEmail);
    }

    // getBorrowerName() {
    //     return _borrowerName.get(this);
    // }
    // getBorrowerEmail() {
    //     return _borrowerEmail.get(this);
    // }
}

module.exports = Borrower;
