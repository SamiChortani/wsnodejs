// Use File System module methods for creating new files: 
// fs.appendFile() / fs.open() / fs.writeFile()

// The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:

var fs = require('fs');

fs.appendFile('hello.txt', 'Hello Node!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// update file
// the fs.writeFile Replace the content of the file "mynewfile3.txt":

fs.writeFile('hello.txt', 'Learn Node', function (err) {
    if (err) throw err;
    console.log('Replaced!');
  });