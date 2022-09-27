// Creating http server and adding http header
// const http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('Hello Guest!');
//     res.write(req.url);
//     res.end();
// }).listen(3000);

// Using the url Module
// const url = require('url');
// var adr = 'http://localhost:3000/search?year=2021&month=august';
// var q = url.parse(adr, true);
// var qdata = q.query;
// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);
// console.log(qdata.month);

// var http = require("http");
// var url = require("url");
// var fs = require("fs");

// Serving a file over http
// http
//   .createServer(function (req, res) {
//     var q = url.parse(req.url, true);
//     var filename = "." + q.pathname;
//     fs.readFile(filename, function (err, data) {
//       if (err) {
//         res.writeHead(404, { "Content-Type": "text/html" });
//         return res.end("404 Not Found");
//       }
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       return res.end();
//     });
//   })
//   .listen(3000);

// CREATE FILE HAS 3 MAIN METHODS
// appending text in a file
// var fs = require('fs')
// fs.appendFile('DataFlairDemo.txt', 'Welcome to DataFlair', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// // opening a file
// var fs = require('fs')
// fs.open('DataFlairDemo.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// // writing text in a file
// var fs = require('fs');
// fs.writeFile('DataFlairDemo.txt', 'Learn Node.js from DataFlair', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// READ FILE
// var fs = require('fs');
// fs.readFile('DataFlairDemo.txt', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// UPDATE FILE HAS 2 MAIN METHODS
// var fs = require('fs')
// fs.appendFile('DataFlairDemo.txt', ' welcome to DataFlair', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// var fs = require('fs');
// fs.writeFile('DataFlairDemo.txt', 'Learn Node.js from DataFlairbb', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// DELETE FILE
// var fs = require('fs');
// fs.unlink('DataFlairDemo.txt', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// RENAME FILE
// var fs = require('fs');
// fs.rename('DataFlairDemo.txt', 'DataFlair.txt', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// Example: Read a file and change its content and read
// it again using callback-based API.
const fs = require("fs");

const fileName = "/Users/joe/test.txt";
fs.readFile(fileName, "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
  const content = "Some content!";
  fs.writeFile(fileName, content, (err2) => {
    if (err2) {
      console.log(err2);
      return;
    }
    console.log("Wrote some content!");
    fs.readFile(fileName, "utf8", (err3, data3) => {
      if (err3) {
        console.log(err3);
        return;
      }
      console.log(data3);
    });
  });
});

// Example: Read a file and change its content and read
// it again using promise-based API.
const fs = require("fs/promises");

async function example() {
  const fileName = "/Users/joe/test.txt";
  try {
    const data = await fs.readFile(fileName, "utf8");
    console.log(data);
    const content = "Some content!";
    await fs.writeFile(fileName, content);
    console.log("Wrote some content!");
    const newData = await fs.readFile(fileName, "utf8");
    console.log(newData);
  } catch (err) {
    console.log(err);
  }
}
example();
