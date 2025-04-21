const mongoose = require('mongoose');
require('dotenv').config();
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    .then(() => console.log("DB connection completed."))
    .catch((err) => {
        console.log("Issue with DB connection.");
        console.log(err.message);
        process.exit(1);
    });
}

module.exports = dbConnect;
