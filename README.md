Learn NodeJS on guide: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11561896#overview
#
Command guide:
-Run server: npm run start-server
-install 3rd party packages: npm install nodemon --save-dev
-update packages: npm install


-Using Nodemon for autorestart on pakage.json
and run with: npm start

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon app.js",
    "start-server": "node app.js"
  },

Other guide links:

S4-47: Understanding the different error types and handling in Node.js:
https://www.tutorialspoint.com/understanding-the-different-error-types-and-handling-in-node-js

S4-48: finding & fixing syntax errors - nodejs
https://www.geeksforgeeks.org/how-to-handle-syntax-errors-in-node-js/

S4-49: runtime errors in node js
https://medium.com/backenders-club/error-handling-in-node-js-ef5cbfa59992

s4-50&51: Logical Errors and using the debugger
https://nodejs.org/en/docs/guides/debugging-getting-started


s4-52: Restarting the debugger Automatically After Editing our App
npm install nodemon -g

data on launch.json:
"skipFiles": [
                "<node_internals>/**"
            ],


module summmary:

npm:
- npm stand for "Node package manager" and it allows you to manage your node project and its dependecies.
- you can initialize project with npm init.
- npm script can be defined in the package.json ton give you "shorcuts"

