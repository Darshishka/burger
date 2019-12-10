var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));


var expHandlebars = require("express-handlebars");
app.engine("handlebars", expHandlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var route = require("./controllers/burger_controller.js");
app.use(route);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});