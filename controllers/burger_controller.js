var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

//refer to burger_data in index
router.get("/burger", function(req, res) {
    burger.selectAll(function(burgerData) {
        res.render("index", { burger_data: burgerData})
    });
});

router.post("/burger/new", function(req, res) {
    burger.insertOne(function(burgerData) {
        console.log(burgerData);
        res.redirect("/burger");
    });
});

router.post("/burger/devoured", function(req, res) {
    burger.updateOne(function(burgerData) {
        console.log(burgerData);
        res.redirect("/burger")
    });
});

module.exports = router;

//look at wek 14 and week 15 video guide
//on click will go to burger/create as a form action