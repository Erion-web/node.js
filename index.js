// first part of the lesson

// const path = require("path");

// var filename = path.basename(__filename);

// console.log(filename);

// console.log(path.resolve("./test.js"));

// console.log(path.join(__dirname, "foo", "test"));

// console.log(path.parse(__filename));

// console.log(process.argv);

/////////////////////////////////////////////////////////////////////////////////////////////
//  second part of the lesson
// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });

// let indexOfNode = process.argv.indexOf("--node");

// if (indexOfNode > -1) {
//   console.log(process.argv[++indexOfNode]);
// } else {
//   console.log("indexOfNode is not found");
// }

// const stdout = process.stdout;
// const stdin = process.stdin;

// stdout.write("Enter your name: \n");
// stdin.on("data", (input) => {
//   const name = input.toString().trim();
//   stdout.write(`Hello ${name}!\n`);
//   process.exit();
// });

// process.on("exit", () => stdout.write("Done!\n"));

// Third part of the lesson

// console.log("READING >>>");

// fs.writeFile("text.txt", "\n Erion Vrella,", (error, content) => {
//   if (error) throw error;
//   console.log("done");
// });

// console.log("DONE >>>");

// const util = require("util");

// const user = {
//   name: "Erion",
//   lastname: "Vrella",
//   age: 16,
//   phone: "123456789",
//   getName: function () {
//     return util.format("Hi, %s", this.name, this.lastname);
//   },
// };

// var obj = util.inspect(user.getName);
// console.log(obj);

// const st = util.format("%s has %d", "Erion", 16);
// console.log(st);

// const st2 = util.inspect({ name: "Erion", age: 25 });

// const st3 = util.isArray([1, 2, 3]);

// const st4 = util.isRegExp(/[a-z]/);

// const st5 = util.isDate(new Date());

// const st6 = util.isError(new Error());

// const st7 = util.isBuffer(Buffer.from("Erion"));

// const st8 = util.isFunction(() => {});

// const st9 = util.isNull(null);
//
//
//

// function Animal(name) {
//   this.name = name;
// }
// Animal.prototype.getName = function () {
//   console.log(this.name);
// };

// function Tiger(name) {
//   this.name = name;
// }

// util.inherits(Tiger, Animal);

// const tiger = new Tiger("Bob");
// tiger.getName();

const user = {
  name: "Erion",
};

console.log(user);
