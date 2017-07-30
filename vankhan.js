var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data.sqlite');
var fs = require('fs');

// Create category
// db.serialize(function () {
    // Create table in database
    //   db.run("CREATE TABLE vankhan_chude (id INT(11) PRIMARY KEY, name TEXT, image TEXT)");

    // Insert to database
    // fs.readFile('vankhan.json', 'utf8', function (err, data) {
    //     if (err) {
    //         return console.log(err);
    //     }
        
    //     data = JSON.parse(data);
    //     for (var i = 0; i < data.length; i++) {
    //         db.run("INSERT INTO vankhan_chude(id, name, image) values("+ i + 1 +", '"+ data[i].cate +"', '')");
    //     }
    // });
// });

// Create item
// db.serialize(function () {
//     // Create table in database
//     //   db.run("CREATE TABLE vankhan_danhsach (id INT(11) PRIMARY KEY, cate_id INT(11), name TEXT, file TEXT)");

//     // Insert to database
//     fs.readFile('vankhan.json', 'utf8', function (err, data) {
//         if (err) {
//             return console.log(err);
//         }
        
//         data = JSON.parse(data);
//         var autoIncrement = 1;
//         for (var i = 0; i < data.length; i++) {
//             for (var j = 0; j < data[i].list.length; j++) {
//                 var item = data[i].list[j];
//                 db.run("INSERT INTO vankhan_danhsach(id, cate_id, name, file) values("+ autoIncrement +", "+ i + 1 +", '"+ item.name +"', '" + item.file +"')");
//                 autoIncrement ++;
//             }
//         }
//     });
// });