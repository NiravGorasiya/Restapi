const mongoose = require('mongoose');
// Connect to MongoDB
mongoose.connect(`${process.env.MOGODB_URL}`)
    .then((res) => {
        console.log("successfull database connection")
    })