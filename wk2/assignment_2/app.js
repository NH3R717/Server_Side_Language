// file system module – allows you to work with the file system on your computer.
const fs = require("fs");
// allows Node.js to transfer data over http
const http = require("http");
// http module – path module – allows working with directories and file paths
const path = require("path")
// URL module – splits up a web address into readable parts.
const url = require("url")

// method creates an HTTP Server object
// parameters – request accepts incoming messages / response - serves response to that message
http.createServer(function (req, res) {

    // takes url string from incoming message provided by the HTTP method and parses it (delimited by /)
    let parsed = url.parse(req.url);
    console.log("Parsed – 1" + parsed + "\n");
    let fileName = path.parse(parsed.pathname)
    console.log("FileName – 2" + fileName + "\n");

    //if fileName.name = "" then change to = index
    fileN = fileName.name == "" ? "index" : fileName.name;
    // if fileName.ext = """ then change to = .html"
    ext = fileName.ext == "" ? ".html" : fileName.ext;
    // if fileName.dir = / then remove / and add / to the end
    dir = fileName.dir == "/" ? "" : fileName.dir + "/";
    // if fileName.name = "" then change to index.html
    page = fileName.name == "" ? "index.html" : fileName.name;

    // create f variable by concatenating listed variables, search for and replace / with ""
    f = (dir + fileN + ext).replace("/", "");
    console.log("f – " + f + "\n");
    console.log("dir – " + dir);
    console.log("fileN – " + fileN);
    console.log("ext – " + ext);

    // media type data object
    let mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };

    if (f) {
        fs.readFile(f, function (err, data) {
            // if page...
            if (page) {
                // media type file use extension
                if (mimeTypes.hasOwnProperty(ext)) {
                    // adds an http header with correct file type to http response
                    res.writeHead(200, { 'Content-Type': mimeTypes[ext] });

                    // passes javascript variable from server to client client (in header)
                    res.write("<script>\"var page\"='" + f + "'; </script>");

                    // response as webpage to client
                    res.end(data, 'utf-8')

                }
            }
        })
    };

}).listen("8080")

// }).listen("8080", function () {
//     console.log("info", 'Server is at port: ' + 8080)
// })