const http = require('http');
// import routes.js
const routes = require('./routes');


const server = http.createServer(routes);

server.listen(3000);

