// file system module – allows you to work with the file system on your computer.
const fs = require("fs");
// allows Node.js to transfer data over http
const http = require("http");
// http module – path module – allows working with directories and file paths
const path = require("path")
// URL module – splits up a web address into readable parts.
const url = require("url")

// method creates an HTTP Server object
// parameters – req accepts incoming messages / res - serves response to that message
http.createServer(function (req, res) {

    // takes url string from incoming message provided by the HTTP method and parses it 
    let parsed = url.parse(req.url);
    console.log("Parsed – 1" + parsed + "\n");
    let fileName = path.parse(parsed.pathname)
    console.log("FileName – 2" + fileName + "\n");

    // shorthand conditional statements

    //if fileName.name = "" then change to = index
    fileN = fileName.name == "" ? "index" : fileName.name;
    // if fileName.ext = """ then change to = .html"
    ext = fileName.ext == "" ? ".html" : fileName.ext;
    // if fileName.dir = / then remove / and add / 
    dir = fileName.dir == "/" ? "" : fileName.dir + "/";
    // if fileName.name = "" then change to index.html
    page = fileName.name == "" ? "index.html" : fileName.name;

    // create f variable by concatenating listed, search for and replace / with ""
    f = (dir + fileN + ext).replace("/", "");
    console.log("f – " + f + "\n");

    // media type data object
    let mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.text': 'css/css',
        '.text': 'javascript/js',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/jpg',
        '.svg': 'image/jpg',
        '.tff': 'image/tff',
        '.woff': 'image/woff',
        '.woff2': 'image/woff2'
    };

    if (f) {
        fs.readFile(f, function (err, data) {
            // if page 
            if (page) {
                // media type file use extension
                if (mimeTypes.hasOwnProperty(ext)) {

                    res.writeHead(200, { 'Content-Type': mimeTypes[ext] });
                    res.write("<script> var name = fileN; </script>");
                    // response as webpage
                    res.end(data, 'utf-8')

                }
            }
        })
    };

}).listen("8080")

// }).listen("8080", function () {
//     console.log("info", 'Server is at port: ' + 8080)
// })