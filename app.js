const http = require('http');

// function rqListener(req, res) {

// }
// // req = contain data
// // res = help for send a response


// http.createServer(rqListener);
// // (rqListerner)= passing function

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
});

server.listen(3000);