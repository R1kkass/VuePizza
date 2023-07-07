const express = require("express");
const bodyParser = require("body-parser");

const path = __dirname + '/dist/';

const app = express();

app.use(express.static(path));

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});

// set port, listen for requests
const PORT = 8083;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});