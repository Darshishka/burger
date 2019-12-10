var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

//refer to burger_data in index
router.get("/", function(req, res) {
    res.redirect("/burger");
});

router.get("/burger", function(req, res) {
    burger.selectAll(function(burgerData) {
        res.render("index", { burger_data: burgerData})
    });
});

router.post("/burger/new", function(req, res) {
    burger.insertOne(req.body.burger_name, 0, function(burgerData) {
        res.json(burgerData);
    }).then( function() {
        res.redirect("/burger");
    });
});

router.post("/burger/devoured", function(req, res) {
    burger.updateOne(req.body.burger_name, req.body.burger_name, function(burgerData) {
        res.json(burgerData);
    });
});

module.exports = router;