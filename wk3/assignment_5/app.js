"use strict"

// imported libraries

// file system module – allows you to work with the file system on your computer.
const fs = require("fs")
// allows Node.js to transfer data over http
const http = require("http")
// http module – path module – allows working with directories and file paths
const path = require("path")
// URL module – splits up a web address into readable parts.
const url = require("url")
// allows sessions to be utilized on the server
const session = require("express-session")

// express = server-side framework
const express = require("express")
// request "simplified http client" – deprecated as of Feb 2020
const request = require("request")
// without body-parser post request body = undefined 
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// 
let ejs = require("ejs")
const { response } = require("express")
const router = express.Router()

// 
app.set("view engine", "ejs")
app.engine("ejs", require("ejs").__express)

// assignment 5 code addition – start

// tells app to use sessions via "express-session"
app.use(session({ secret: "secret", saveUninitialized: true, resave: true }))

// global variable to store session data
let sess

// routs

router.get("/", function (req, res) {
    //blank sess var initialization on page load
    sess = req.session
    res.render('index', { pagename: "Home", sess: sess })

})

// fully functional only with 2 "router.get("/register",..." statements

router.get("/register", function (request, response) {

    response.render("register", { pagename: "Register", sess: sess })

})

router.get("/logout", function (req, res) {

    sess = req.session
    sess.destroy(function (err) {
        res.redirect("/")
    })

})

router.post("/login", function (req, res) {
    console.log("login session")
    console.log(req.email)
    sess = req.session
    console.log("login email")
    console.log(sess.email)
    sess.email = req.body.email
    console.log("login password")
    console.log(sess.password)
    sess.password = req.body.password
    console.log("login login")
    console.log(sess.logged)
    sess.logged = ""

    let errors = []
    if (req.body.email == "") {
        errors.push("blank email")
    }
    if (req.body.password == "") {
        errors.push("blank password")
    }
    if (!/^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(req.body.email)) {
        errors.push("email not valid")
    }
    if (!/^(?=.*\d).{5,}$/.test(req.body.password)) {
        errors.push("password not valid")
    }

    // validation for login user – Mike@aol.com – password abc123 criteria

    if (req.body.email != "Mike@aol.com" && req.body.password != "abc123") {
        errors.push("Invalid Login")
        console.log("if" + sess)
        console.log("if" + sess.logged)
        console.log("if" + req.session)
        console.log("if" + sess.email)
        console.log("if" + req.body.email)
        console.log("if" + sess.password)
        console.log("if" + req.body.password)
        console.log("LOGIN CREDENTIALS NOT VALIDATED")
        res.render("index", { pagename: "Home", errors: errors })
    }
    if (req.body.email == "Mike@aol.com" && req.body.password == "abc123") {
        sess.logged = "true"
        console.log(sess.logged)
        console.log("elseif" + req.session)
        console.log("elseif" + sess.email)
        console.log("elseif" + req.body.email)
        console.log("elseif" + sess.password)
        console.log("elseif" + req.body.password)
        console.log("EVERYTHING VALIDATED – SENDS TO /profile")
        return res.redirect(303, "/profile")

    } else {
        console.log("else" + sess)
        console.log("else" + session.logged)
        console.log("else" + req.session)
        console.log("else" + sess.email)
        console.log("else" + req.body.email)
        console.log("else" + sess.password)
        console.log("else" + req.body.password)
        res.render("index", { pagename: "Home", errors: errors })
        console.log("EVERYTHING VALIDATED – GOES TO ELSE")
    }
    console.log(errors)
    console.log("login session")
    console.log(req.email)
    // sess = req.session
    console.log("login email")
    console.log(sess.email)
    // sess.email = req.body.email
    console.log("login password")
    console.log(sess.password)
    // sess.password = req.body.password
    console.log("login login")
    console.log(sess.logged)

})

//
router.get("/profile", function (req, res) {
    console.log("redirected to profile")
    if (typeof (sess) == "undefined" || sess.logged != "true") {
        let errors = ["Not an authenticated user"]
        console.log("/profile IF (N)")
        console.log(sess.logged)
        res.render('home', { pagename: "Home", errors: errors })
    } else {
        console.log("/profile ELSE (N) (Y)")
        console.log(sess.logged)
        res.render('profile', { pagename: "Profile", sess: sess })
    }
})

// fully functional only with 2 "router.get("/register",..." statements
router.get("/register", function (request, response) {

    response.render("register", { pagename: "Register", sess: sess })

})

// for register form
router.post("/register", function (req, res) {

    console.log(req.body.firstName, req.body.lastName, req.body.address, req.body.city, req.body.state, req.body.zipcode, req.body.age, req.body.gender, req.body.consent, req.body.bio)
    console.log(req.route)
    let errors = []
    let success = []

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
    res.render("register", { pagename: "Register", success: success, errors: errors, sess: sess })

})

const port = 8080

app.use(express.static("public"))
app.use("/", router)
let server = app.listen(port, err => {
    if (err) {
        console.log('Server error', err)
        return
    }
    else {
        console.log("listening on port " + port)
    }

})