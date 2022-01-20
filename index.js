const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, '../../react class');

fs.readdir(directoryPath, function (err, files) {
  var res=  path.format({
        dir: '',
        base: 'file.txt'
      });
      

    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    files.forEach(function (file) {

        console.log(file,res);
        //console.log(res);
    });
});


// fs = require('fs')
// fs.readFile('', 'utf8', function (err,data) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(data);
// });
