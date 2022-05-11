// function sayHello(name) {
//   console.log("Hello " + name);
// }

// sayHello("Erion");
// console.log(window);

// console.log(); // global

// setTimeout();
// clearTimeout();

// setInterval();
// clearInterval();

// var message = "";
// console.log(global.message);

// var sayHello = function () {};
// window.sayHello();

// console.log(module);

// const log = require("./logger");
// log("message");

// const path = require("path");
// var pathObj = path.parse(__filename);
// console.log(pathObj);

// const os = require("os");
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
// console.log("Total Memory: " + totalMemory);
// Template string
// ES6 / ES2015 : ECMA Script 6
// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// const fs = require("fs");
// const files = fs.readdirSync("./");
// console.log(files);
// fs.readdir("$", function (err, files) {
//   if (err) console.log("Error", err);
//   else console.log("Result", files);
// });
//
//
// const EventEmitter = require("events");

// const Logger = require("./logger");
// const logger = new Logger();
// Register a listener
// logger.on("messageLogged", (arg) => {
//   console.log("Listener called", arg);
// });

// logger.log("message");
// Raise: logging (data: message)

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }
  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

process.on("exit", () => stdout.write("Done!\n"));

server.listen(3010);

console.log("listening on port 3000...");
