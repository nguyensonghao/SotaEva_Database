var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data.sqlite');
var database = new sqlite3.Database('phong_tuc.data');
var fs = require('fs');

// Create category
// db.serialize(function () {
//     // Create table in database
//     //   db.run("CREATE TABLE phongtuc_chude (id INT(11) PRIMARY KEY, name TEXT, image TEXT)");

//     // Insert database 
//     database.serialize(function() {
//         database.each("SELECT * from Category", function(err, row) {
//             db.run("INSERT INTO phongtuc_chude(id, name, image) values("+ row['id'] +", '"+ row['category_desc'] +"', '')");
//         });
//     });
// });

// Create item
// db.serialize(function () {
//     // Create table in database
//     //   db.run("CREATE TABLE phongtuc_danhsach (id INT(11) PRIMARY KEY, cate_id INT(1), cate_sort INT(11), title TEXT, description TEXT)");

//     // Insert database 
//     database.serialize(function() {
//         database.each("SELECT * from Custom_Detail", function(err, row) {
//             db.run("INSERT INTO phongtuc_danhsach(id, cate_id, cate_sort, title, description) values(" + row['id'] +" , "+ row['category_id'] +" , "+ row['category_order'] +", '"+ row['custom_desc'] +"', '" + row['custom_content'] + "')", function (err) {
//                 if (err) {
//                     console.log(row);
//                 }
//             });
//         });
//     });
// });