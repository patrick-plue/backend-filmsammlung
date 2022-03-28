const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use(express.json());
app.use(cors());

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.get("/filmitems", (req, res) => {
  res.send("FILMITEMS");
});

app.get("/user", (req, res) => {
  res.send("logged in!");
});

app.post("/user", (req, res) => {
  res.send("Registriert!");
});

/*

route get filmitems || select * from filmitem       CHECKED
route get user || login                             CHECKED
route post user || registrieren                     CHECKED

*/
