const fs = require('fs');


const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
    }
    
    if (url === '/message' && method === 'POST') {
        const body = [];
        // create event listener with name 'data' and push all chunks to create body
        req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
        });
        // create eventlistener with name 'end' and receive all chunks to create body & convert to string
        req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        // all user input requests are created in a message.file and reside in that file
        // fs.writeFileSync('message.txt', message); make a block execution of the next line of code until this file is done
        fs.writeFile('message.txt', message, err => {
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
        //err => {}); create call back with no blocking the code execution
        });
    }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
};

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';

// module.exports = requestHandler;
// export routes.js

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some text';

