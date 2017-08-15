var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data.sqlite');
var database = new sqlite3.Database('NauAnNgon.sqlite');
var fs = require('fs');

// Create category
db.serialize(function () {
    // Create table in database
      // db.run("CREATE TABLE mon_an_danh_sach (id INT(11) PRIMARY KEY, cate_id INT(11), name TEXT, description TEXT)");

    // Insert to database
    db.serialize(function () {
        database.serialize(function() {
            database.each("SELECT * from Dishes", function(err, row) {
                db.run("INSERT INTO mon_an_danh_sach(id, cate_id, name, description) values(" + row['id'] +" , "+ row['idMon'] +" , '"+ row['mon'] +"', '" + row['data'] + "')", function (err) {
                    if (err) {
                        console.log(row);
                    }
                });
            });
        });
    });
});