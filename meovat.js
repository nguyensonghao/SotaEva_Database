var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data.sqlite');
var fs = require('fs');

// Create category
db.serialize(function () {
    // Create table in database
      // db.run("CREATE TABLE meovat_chude (id INT(11) PRIMARY KEY, title TEXT, url TEXT)");

    // Insert to database
    fs.readFile('meovat.json', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        
        data = JSON.parse(data);
        for (var i = 0; i < data.length; i++) {
            var id = i + 1;
            db.run("INSERT INTO meovat_chude(id, title, url) values("+ id +", '"+ data[i]._title +"', '"+ data[i]._content +"')");
        }
    });
});