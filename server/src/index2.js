const express = require("express");
const cors = require("cors"); // import cors

const app = express();


// app.use(cors());

app.use(cors({
  origin: "http://localhost:5173"
}));

app.get("/", (req, res) => {
  res.send("wow");
});

app.listen(5000, () => {
  console.log("backend running");
});