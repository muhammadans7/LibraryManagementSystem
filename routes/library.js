const Book = require('../book');
const Borrower = require('../borrow');
const Transaction = require('../transaction');

const express = require('express');
const router = express.Router();
const Joi = require('joi');
const app = express();
app.use(express.json());
const books = [];
const borrowers = [];
const transaction = [];


// addind some data first in books
books.push(new Book('martin', 'fire', 'fiction', true));
books[0].bookId = books.length;
books.push(new Book('martin', 'blood', 'fiction', false));
books[1].bookId = books.length;


// adding some data in borrowerslist
borrowers.push(new Borrower('ans', 'muhammadans2990@gmail.com'));
borrowers[0].borrowerId = borrowers.length;


// showing all books
router.get('/books', (req, res) => {
    res.send(books);
})

// showing particular books
router.get('/books/:id', (req, res) => {

    const book = books.find(b => b.bookId === parseInt(req.params.id));

    if (!book) return res.status(404).send('book not found');
    
    res.send(book);
});


// adding a book in library
router.post('/books', (req, res) => {
   

    const { error } = validateBooks(req.body);

    if (error) return res.status(400).send(error.details[0].message);


    // const book = {
    //     bookName: req.body.bookName,
    //     bookAuthor: req.body.bookAuthor,
    //     bookGenre: req.body.bookGenre,
    //     isAvailable: req.body.isAvailable
    // };

    const book = new Book(req.body.bookAuthor, req.body.bookName, req.body.bookGenre, req.body.isAvailable);

    books.push(book);
    books[books.length - 1].bookId = books.length;
    res.send(book);


});

// updating a specific book
router.put('/books/:id', (req, res) => {

    const book = books.find(b => b.bookId === parseInt(req.params.id));

    if (!book) return res.status(404).send(`book with bookId ${book.bookId} was not found`);

    const { error } = validateBooks(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    book.bookName = req.body.bookName;
    book.bookAuthor = req.body.bookAuthor;
    book.bookGenre = req.body.bookGenre;
    book.isAvailable = req.body.isAvailable;

    res.send(book);
});

// deleting a specific book

router.delete('/books/:id', (req, res) => {

    const book = books.find(b => b.bookId === parseInt(req.params.id));
    if (!book) return res.status(404).send(`book with bookId ${book.bookId} was not found`);

    const index = books.indexOf(book);
    books.splice(index, 1);

    res.send(book);

});
// borrower

// getting list of all borrowers

router.get('/borrowers', (req, res) => {
    res.send(borrowers);
})


// helpers
function validateBooks(book) {

    const schema = Joi.object({

        bookAuthor: Joi.string().min(3).required(),
        bookName: Joi.string().min(3).required(),
        bookGenre: Joi.string().min(3).required(),
        isAvailable: Joi.bool().required()
    });

    return schema.validate(book);
}
console.log(books);
module.exports = router;