var orm = require("../config/orm.js");

orm.selectAll({});

//might need curly braces
orm.insertOne("burger_name", "devoured");

orm.updateOne("burger_name", "devoured");


var burger = {
    selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    insertOne: function(cb) {
        orm.insertOne("burger_name", "devoured", function(res) {
            cb(res);
        });
    },
    updateOne: function(cb) {
        orm.updateOne("burger_name", "devoured", function(res) {
            cb(res);
        });
    }

}

module.exports = burger;