const http = require('http');

// function rqListener(req, res) {

// }
// // req = contain data
// // res = help for send a response


// http.createServer(rqListener);
// // (rqListerner)= passing function

http.createServer((req, res) => {
    console.log(req);
});