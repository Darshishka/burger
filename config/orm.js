var connection = require("../config/connection.js");

//methods
    //selectAll()
    //insertOne()
    //updateOne()

var orm = {
    selectAll: function() {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, [whatToSelect], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(tableInput, valOfCol) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) ";
        queryString += "VALUES ('?', ?)";
        connection.query(queryString, [tableInput, valOfCol], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(whatToSelect, valOfCol) {
        var queryString = "UPDATE burgers SET devoured = true WHERE burger_name = ?";
        connection.query(queryString, [whatToSelect, valOfCol], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
}

module.exports = orm;