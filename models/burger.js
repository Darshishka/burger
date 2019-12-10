var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(burger_name, devoured, cb) {
        orm.insertOne(burger_name, devoured, function(res) {
            cb(res);
        });
    },
    updateOne: function(burger_name, devoured, cb) {
        orm.updateOne(burger_name, devoured, function(res) {
            cb(res);
        });
    }

}

module.exports = burger;