const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const { configDotenv } = require('dotenv');
const { mongoose } = require('mongoose');
const AllBooks = require('./Book');



app.use(express.urlencoded())
app.use(express.json({ extends: false }))


configDotenv()
//DataBase cofig
const DataBase = async () => {

    try {
        await mongoose.connect(process.env.MDB);
        console.log('MDB Connected...');


    } catch (error) {

        console.log(error.message);
        process.exit(1);

    }
}
DataBase()


//Inistial Route
app.get('/', (req, res) => {
    res.send('hello world')
})

//Porduct Route
app.use('/book', AllBooks)



app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})