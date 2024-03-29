const express = require("express");
const cors = require("cors");
const apiRouter = require("./routes/api-router");

const app = express();

app.use(express.json());

const corsOptions = { origin: "http://localhost:5173" };

app.use(cors(corsOptions));
app.use("/api", apiRouter);

module.exports = app;
