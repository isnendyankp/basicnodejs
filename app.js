const http = require('http');

// function rqListener(req, res) {

// }
// // req = contain data
// // res = help for send a response


// http.createServer(rqListener);
// // (rqListerner)= passing function

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);