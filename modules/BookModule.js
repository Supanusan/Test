const { default: mongoose } = require("mongoose");

const book = mongoose.Schema({
    Bid: Number,
    Bname: String,
    ISBN: Number,
})
const Book = mongoose.model('Book', book);

module.exports = Book;