var express=require("express");
var app = express();

app.set("view engine","jade")

app.get('/', function (req, res) {
  res.render('index',{"saludo":"Hola Zahit"});
});


app.listen(8080);