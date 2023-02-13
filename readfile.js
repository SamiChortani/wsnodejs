//  fs is the file system module

// var fs = require("fs");
// var data = fs.readFileSync('welcome.txt');
// console.log(data.toString());

var fs = require("fs");

fs.readFile('welcome.txt', function (err, data) {
   if (err) {
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
});


// read hello.txt file created by using File System module
var data = fs.readFileSync('hello.txt');
console.log(data.toString());
