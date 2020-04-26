const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, x-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "sfd7ds68f",
      title: "First serve post",
      content: "This is coming from server.",
    },
    {
      id: "dfdf68787",
      title: "second serve post",
      content: "This is coming from server!!",
    },
  ];
  res.status(200).json({
    message: "Post fetched successfully!!",
    posts: posts,
  });
});

module.exports = app;
