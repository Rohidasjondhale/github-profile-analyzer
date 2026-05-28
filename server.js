require("dotenv").config();

const express = require("express");

const cors = require("cors");

const githubRoutes =
require("./routes/githubRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/api/github",
  githubRoutes
);

app.get("/", (req, res) => {

  res.send(
    "GitHub Profile Analyzer API Running"
  );
});

app.listen(process.env.PORT, () => {

  console.log(
    `Server Running on Port ${process.env.PORT}`
  );
});