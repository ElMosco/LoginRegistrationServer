var express = require('express');
var router = express.Router();


var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://TripNav:tripnavigation@Primo.jweu5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

router.get('/:nick/:pass', function (req, res){
    nick = req.params.nick;
    pass = req.params.pass;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("TripNav");
        dbo.collection('users').find({$and:[{"nickname":nick},{"password":pass}]}).toArray(function(err, results) {
        if (err) throw err;
        this.result = results;
        if(results.length == 1)
        {
            var log = {"logedin" : true}
            result = log;
            res.send(result);
        }else
        {
            var log = {"logedin" : true}
            result = log;
            res.send(result);
        }
        db.close();
        });
    });
});

module.exports = router;
