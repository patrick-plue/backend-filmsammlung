const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
require("dotenv").config();
const client = require("./connection");
const { response } = require("express");

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use(express.json());
app.use(cors());

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.get("/filmitems", (req, res) => {
  let films = [];
  client.query(`SELECT * FROM filmitem`, (error, response) => {
    if (!error) {
      films = response.rows;
    } else {
      res.send(error);
    }
  });

  setTimeout(() => res.send(films), 500);
});

app.get("/filmitems/genre", (req, res) => {
  let id = req.query.id;
  console.log(id);
  client.query(
    `SELECT genre FROM public.filmtogenre WHERE filmid = '${id}'`,
    (error, response) => {
      if (!error) {
        res.send(response.rows);
      } else {
        console.log(error);
      }
    }
  );

  // setTimeout(() => res.send(films), 500);
});

app.get("/filmitems/genreAll", (req, res) => {
  client.query(
    `SELECT genre FROM public.filmtogenre`,
    (error, response) => {
      if (!error) {
        res.send(response.rows);
      } else {
        console.log(error);
      }
    }
  );
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
