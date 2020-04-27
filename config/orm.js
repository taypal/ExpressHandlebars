var connection = require('../config/connection')


function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}


function objToSql(ob) {
  var arr = [];


  for (var key in ob) {
    var value = ob[key];

    if (Object.hasOwnProperty.call(ob, key)) {

      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }

      arr.push(key + "=" + value);
    }
  }


  return arr.toString();
}



var orm = {

  all: function (tableInput, cb) {
    var queryString = ' SELECT * FROM ' + tableInput + ';';
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result)
      console.log('queryString from selectAll', queryString);
      console.log('result from selectAll', result);
    })
  },

  create: function (table, cols, vals, cb) {

    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log('queryString from create', queryString);


    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
      console.log('create', result);
    });
  },

  update: function (table, objColVals, condition, cb) {
    var queryString = 'UPDATE ' + table;
    queryString += ' SET ';
    queryString += objToSql(objColVals);
    queryString += ' WHERE ';
    queryString += condition;

    console.log('queryString update', queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      console.log('result update', result);
    });
  },

  delete: function (table, condition, cb) {
    var queryString = 'DELETE FROM ' + table;
    queryString += ' WHERE ';
    queryString += condition;

    console.log('queryString delete', queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });

  }
}

module.exports = orm;