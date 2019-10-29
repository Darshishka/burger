var connection = require("../config/connection.js");

//methods
    //selectAll()
    //insertOne()
    //updateOne()

var orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, [whatToSelect], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
        cb(result);
    },
    insertOne: function(burger_name, isDevoured, cb) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) ";
        queryString += "VALUES ('?', ?)";
        connection.query(queryString, [burger_name, isDevoured], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
        cb(result);
    },
    updateOne: function(whatToSelect, valOfCol, cb) {
        var queryString = "UPDATE burgers SET devoured = true WHERE burger_name = ?";
        connection.query(queryString, [whatToSelect, valOfCol], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
        cb(result);
    }
}

module.exports = orm;