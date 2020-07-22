var http = require('http'); // (1) missing p in http
var myname = function () { // (2) "function" misspelled
  return ("Here is my IP address");
} // (3) remove console.log() & add return statement
function callHttpbin() { // (4) "callHttpbin" misspelled
  let promise = new Promise((resolve, reject) => {
    http.get(
      'http://httpbin.org/ip',
      function (response) {
        var str = "";
        response.setEncoding('utf8');
        response.on('data', function (data) {
          str += data;
        });
        response.on('end', function () {
          var result = JSON.parse(str);
          myips = result.origin;
          resolve(myips) // (5) missing argument
        });
      }
    );
  });

  let result = promise; // (6) "await is only valid in async function"
  return (result); // (7) add return statement
}
async function executeAsyncTask() { // (8) missing async keyword
  const valueA = await callHttpbin()
  const valueB = myname();
  console.log(valueB + " " + valueA)
} // (9) added closing bracket

executeAsyncTask() // (10) call function

// Output Here is my IP address 149.24.160.1, 149.24.160.1