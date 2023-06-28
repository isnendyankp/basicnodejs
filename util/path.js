const path = require('path');

// Return the directory name of a path. Similar to the Unix dirname command
module.exports = path.dirname(process.mainModule.filename);