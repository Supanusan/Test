const Book = require('./modules/BookModule')

//To see All Books
const GetAllBooks = async (req, res) => {
    try {
        const AllBooks = await Book.find()
        if (!AllBooks) {
            return res.status(400).json({ message: 'NO books Found !' })
        }
        res.status(200).json({ data: AllBooks })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: 'Error' })
    }

}

//Add singel Book
const AddBook = async (req, res) => {
    const { Bid, Bname, ISBN } = req.body;
    try {

        if (!Bid || !Bname || !ISBN) {
            return res.status(404).json({ message: 'please Check each feilds' })
        }
        console.log(Bid, Bname, ISBN);

        const bookdata = new Book({ Bid, Bname, ISBN })
        const saved = await bookdata.save()
        res.status(201).json({ message: 'Succesfuly created' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


// Update a book
const UpdateBook = async (req, res) => {
    const { Bid } = req.params;
    const { Bname, ISBN } = req.body;
    try {
        if (!Bname || !ISBN) {
            return res.status(400).json({ message: 'please Check each feilds' })
        }
        const findBook = await Book.findByIdAndUpdate(Bid, req.body);
        if (!findBook) {
            return res.status(404).json({ message: 'This book not found !' })
        }
        return res.status(202).json({ message: 'Sucessfuly updated !' })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

//Delete a book
const DeleteBook = async (req, res) => {
    const { Bid } = req.params;
    if (!Bid) {
        return res.status(400).json({ message: 'please insert the bookid' })
    }


    try {
        const DelBook = await Book.findByIdAndDelete(Bid);
        if (!DelBook) {
            return res.status(500).json({ message: 'Unable to delete !' })
        }
        return res.status(200).json({ message: 'Successfuly Deleted !' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

module.exports = { GetAllBooks, AddBook, UpdateBook, DeleteBook }