Learn NodeJS on guide: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11561896#overview
#
Command guide:
-Run server: npm run start-server
-install 3rd party packages: npm install nodemon --save-dev
-update packages: npm install


Using Nodemon for autorestart on pakage.json
and run with: npm start

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon app.js",
    "start-server": "node app.js"
  },