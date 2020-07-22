"use strict"

// imported libraries

// file system module – allows you to work with the file system on your computer.
var fs = require("fs");
// allows Node.js to transfer data over http
var http = require("http");
// http module – path module – allows working with directories and file paths
var path = require("path")
// URL module – splits up a web address into readable parts.
var url = require("url")

// express = server-side framework
var express = require("express");
// request "simplified http client"
var request = require("request");
// without body-parser post request body = undefined 
var bodyParser = require("body-parser")
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 
let ejs = require("ejs");
const { response } = require("express");
const router = express.Router();
// var app = express();

// 
app.set("view engine", "ejs");
app.engine("ejs", require("ejs").__express);

// 
router.get("/", function (request, response) {

    response.render("index", { pagename: "Home" }); //views/index.ejs

})

// 
router.get("/register", function (request, response) {

    response.render("register", { pagename: "Register" }); //views/register.ejs

})

// 
router.get("/profile", function (request, response) {

    response.render("profile", { pagename: "Profile" }); //views/about.ejs

})

// for register form
router.post("/register", function (req, res) {

    console.log(req.body.firstName, req.body.lastName, req.body.address, req.body.city, req.body.state, req.body.zipcode, req.body.age, req.body.gender, req.body.consent, req.body.bio)
    console.log(req.route)
    var errors = [];
    var success = [];

    if (req.body.firstName == "" || !/^[a-zA-Z]+$/.test(req.body.firstName)) {
        errors.push("Invalid First Name Entry")
    } else {
        success.push("Valid First Name Entry")
    }
    if (req.body.lastName == "" || !/^[a-zA-Z]+$/.test(req.body.lastName)) {
        errors.push("Invalid Last Name Entry")
    } else {
        success.push("Valid Last Name Entry")
    }
    if (req.body.address == "" || !/^[\da-zA-Z\s(.)]+$/.test(req.body.address)) {
        errors.push("Invalid Address Entry")
    } else {
        success.push("Valid Address Entry")
    }
    if (req.body.city == "" || !/^[a-zA-Z]+$/.test(req.body.city)) {
        errors.push("Invalid City Entry")
    } else {
        success.push("Valid City Entry")
    }
    if (req.body.state == "" || !/^[a-zA-Z]+$/.test(req.body.state)) {
        errors.push("No State Entered")
    } else {
        success.push("State Entered")
    }
    if (req.body.zipcode == "" || !/^(?=\d).{5}$/.test(req.body.zipcode)) {
        errors.push("Invalid Zipcode Entry")
    } else {
        success.push("Valid Zipcode Entry")
    }
    if (req.body.age == "") {
        errors.push("No Age Entered")
    } else {
        success.push("Age Entered")
    }
    if (!req.body.gender) {
        errors.push("Select Your Gender")
    } else {
        success.push("Gender Selected")
    }
    if (!req.body.consent) {
        errors.push("Consent To Register")
    } else {
        success.push("Consented to Registration")
    }
    if (req.body.bio == "") {
        errors.push("No Info Entered")
    } else {
        success.push("Bio Info Entered")
    }

    res.render("register", { pagename: "Register", success: success, errors: errors });
})

app.use(express.static("public"));
app.use("/", router);
var server = app.listen("8080"); 