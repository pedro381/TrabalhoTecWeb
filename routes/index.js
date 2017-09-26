var express = require('express');
var connection = require('./mysqlConnection');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    
    connection.connect();
    connection.query('SELECT * FROM Usuario', function (err, rows, fields) {
        if (err) throw err

        res.end(JSON.stringify(rows));
    });
    connection.end(); 
    
    //res.render('index', { title: "123" });
    
});

module.exports = router;
