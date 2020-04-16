var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("dellshamsdb");
  var updatevalue = {movie: "The Banker"};
  var newvalues = { $set: {movie: "The Witcher", year: "2019", rating: 9.5} };
  dbo.collection("myMovies").updateOne(updatevalue, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    console.log(res.toString())
    db.close();
  });
  dbo.collection("myMovies").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});