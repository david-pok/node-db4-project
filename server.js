const express = require("express");
const helmet = require("helmet");

const recRouter = require("./api/recipes/recRouter")

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/recipes", recRouter);


server.get("/", (req, res) => {
  res.status(200).json({ message: "UP AND RUNNING" });
});

module.exports = server;
