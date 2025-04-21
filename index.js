const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(express.json());

const todoRouter = require('./routes/todos'); 
const { default: mongoose } = require("mongoose");


app.use("/api/v1", todoRouter);

const dbconnect = require('./config/database');
dbconnect();

app.get('/', (req, res) => {
    res.send(`<h1>This is HOMEPAGE body</h1>`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });