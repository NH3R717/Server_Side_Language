var fs = require("fs");
var http = require("http");
var path = require("path")
var url = require("url")

http.createServer(function (req, res) {

    //produces and object named 'parsed'
    var parsed = url.parse(req.url);
    var fileN = path.parse(parsed.pathname)

    fileN = filename.name == "" ? "index" : filename.name;

    if (filename.name == "") {
        fileN = "index";
    } else {
        fileN = filename.name;
    }

    // console.log(filename.name);

    fs.readFile(fileN + ".html", function (err, data) {

        res.writeHead(200);
        res.write("<script>var page = fileN; </script>");
        res.end(data);

    })

}).listen("8080")