const express = require("express");
const jwt = require("jsonwebtoken");
const connection = require("./Database/db");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
  res.send(`KFC Server started on localhost:${PORT}`);
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`🌎 started on http://localhost:${PORT}/`);
});
