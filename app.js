const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use(express.json());
app.use(cors());

app.get('/test', (req, res) => {
  res.send('Hello World!');
});

app.get('/filmitems', (req, res) => {
  res.send('FILMITEMS');
});

/*

route get filmitems || select * from filmitem
route get user || login
route post user || registrieren

*/
