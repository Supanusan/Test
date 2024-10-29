const express = require('express');
const { GetAllBooks, AddBook, UpdateBook, DeleteBook } = require('./Routes');
const router = express.Router()


router.route('/allbooks')
    .get(GetAllBooks)

router.route('/addbook')
    .post(AddBook)

router.route('/updatebook/:id')
    .put(UpdateBook)

router.route('/deletebook/:id')
    .delete(DeleteBook)

module.exports = router