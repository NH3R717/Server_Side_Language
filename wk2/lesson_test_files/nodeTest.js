// access to "fs" library
const fs = require("fs");
 
const readline = require("readline")

const rl = readline.createInterface({

	input : process.stdin,
	output : process.stdout

})

// fs.readFile("DATA", "utf8", function(err, contents) {
// 	console.log(err);
// 	console.log(contents);
// 	console.log("Hello!");
// })

// fs.readFile("pythonFile.txt", "utf8", function(err, contents) {
// 	// console.log(err);
// 	console.log(contents);
// 	console.log("Hello!");
// })

// without callback function defined

// testText = "Node test text from nodeTest.js."

// fs.writeFile("nodeFile.txt", testText, "utf8", function(err) {
// 	// console.log(err);
// 	console.log(err);
// 	console.log("Hello!");
// })

// with callback function defined * Doesn't work

// const callbackDemo = function(){

// }

// testText = "Node test text from nodeTest.js."

// fs.writeFile("nodeFile.txt", testText, "utf8", callbackDemo(err) {
// 	// console.log(err);
// 	console.log(err);
// 	console.log("Hello!");
// })

rl.question("What is your name? ",(name)=>{

	rl.question("What is your age? ",(age)=>{

		console.log(name+" your age is: "+age+".")
		rl.close()

	})
})
