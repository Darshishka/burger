var connection = require("./connection.js");

var orm = {
    selectAll: function(whatToSelect, cb) {
        var queryString = "SELECT * FROM " + whatToSelect + ";";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(burger_name, isDevoured, cb) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) ";
        queryString += "VALUES (?, ?)";
        connection.query(queryString, [burger_name, isDevoured], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(whatToSelect, valOfCol, cb) {
        var queryString = "UPDATE burgers SET devoured = true WHERE burger_name = '" + whatToSelect + "';";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;