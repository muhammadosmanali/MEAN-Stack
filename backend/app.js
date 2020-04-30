const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postRoutes = require("./routes/posts")

const app = express();

//Connected to mongodb database
mongoose.connect("your connectiom string").then(() => {
  console.log("connect to database");
}).catch((error) => {
  console.log("Connection failed!", error)
});

//Parse data to json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Setting up CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, x-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postRoutes);

module.exports = app;
