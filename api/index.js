require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const { PORT } = require("./config");
const feedRouter = require("./feedRouter");
const mailRouter = require("./mailRouter");

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());

app.get("/", async (req, res) => {
  res.status(200).json({ message: "Hello potential clients!" });
});

app.use("/api/feed", feedRouter);
app.use("/api/mail", mailRouter);

app.listen(PORT, () => {
  console.log(`server listening at http://localhost:${PORT}`);
});

module.exports = app;
