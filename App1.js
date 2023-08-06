//current working directory/folder
const path = require ("path")
const cwd = path.resolve();
console.log({cwd});
// separator of the file path
const filePath = "C:\Users\h P STREAM\Desktop\Backend_first_Assig\path1.jspath/to/file.extension";
const separator = path.sep;
console.log("separator of file path", separator);
//file extension name
const extName = path.extname ('C:\Users\h P STREAM\Desktop\Backend_first_Assig\path1.js');
console.log({extName});
// Process id of the current running process
const process = require("process");
console.log("process ID:", process.App1.js);
//user information of the os
const os = require('os');
console.log(os.userInfo());