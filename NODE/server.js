
console.log("Server is now open..");
const dt = require('./myDateModule');
const http = require('http');
const url = require('url');
const fs = require('fs');   //File System Module
const uc = require('upper-case');
const formidable = require('formidable');

//DEMO
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});  //To respond an html
//   res.write("The date and time is currently: " + dt.myDateTime());  //to display date from myDateModule
//   res.write(req.url);                         //To display the requested url
//   var q = url.parse(req.url, true).query;     //Split Query String
//   var txt = q.year + " " + q.month;               //and Display
//   res.end(txt);
// }).listen(8080);

//FILE SYSTEM
// fs.rename('Calculator.html', 'Calculator.html', function(err) {
//   if(err) throw err;
//   console.log("File Renamed!");
// });
// http.createServer(function (req, res) {
//   fs.readFile('./Calculator.html', function(err, data) {
//        if (err) {
//        res.writeHead(404, {'Content-Type': 'text/html'})
//        res.write("404 Not Found");
//        return res.end();
//   }
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//   });
// }).listen(8080);

//URL.PARSE
// const adr = 'http://localhost:8080/russel/default.htm?year=2017&month=february';
// const q = url.parse(adr, true)
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   console.log(q);
//   console.log(q.host); //returns 'localhost:8080'
//   console.log(q.pathname); //returns '/default.htm'
//   console.log(q.search); //returns '?year=2017&month=february'

// var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
//   console.log(qdata.month);
//   res.write(q.query.year);
//   res.end()
// }).listen(8080);

//FILE SERVER
http.createServer(function(req, res) {
  var q = url.parse(req.url, true);
  var filename = '.' + q.pathname;
  console.log(filename);
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'})
      res.write(uc("404 Not Found!"));
      return res.end();
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);

//EVENT EMITTER
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write("The file is open!");
    res.end();
    // fs.createReadStream('./cal.css').on('open', function() {
    // res.writeHead(200, {'Content-Type': 'text/html'})
    // res.write("The file is open!");
    // res.end();
  // })
}).listen(3000);

//UPLOAD FILES
// http.createServer(function (req, res) {
//   if (req.url == '/fileupload') {
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//       var oldpath = files.filetoupload.path;
//       console.log(oldpath);
//       var newpath = '/Users/russel/Desktop/NODE/Uploads/' + files.filetoupload.name;
//       fs.rename(oldpath, newpath, function (err) {
//         if (err) throw err;
//         res.write('File uploaded and moved!');
//         res.end();
//       });
//  });
//   } else {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     res.write('<input type="file" name="filetoupload"><br>');
//     res.write('<input type="submit">');
//     res.write('</form>');
//     return res.end();
//   }
// }).listen(8080);