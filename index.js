// How to read an input
const readline = require("readline");
const fs = require("fs");
const http = require("http");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("What is your name", (name) => {
//   console.log(`My name is ${name}`);
//   rl.close();
// });

// rl.on("close", () => {
//   console.log("Interface closed");
//   process.exit(0);
// });

// How to read and write file synchronously

// Read file sync

// let textIn = fs.readFileSync("./Files/input.txt", "utf-8");
// console.log(textIn);

// Write file sync

// let content = `content from input ${textIn}`;
// fs.writeFileSync("./Files/output.txt", content);

// How to Read and  write file Asynchronously and how callback hell happens

// fs.readFile(`./Files/start.txt`, "utf-8", (error1, data1) => {
//   console.log(data1);
//   fs.readFile(`./Files/${data1}.txt`, "utf-8", (error2, data2) => {
//     console.log(data2);
//     fs.readFile(`./Files/append.txt`, "utf-8", (error3, data3) => {
//       console.log(data3);
//       fs.writeFile(
//         `./Files/output.txt`,
//         `${data2}\n\n${data3}\n\n Date created ${new Date()}`,
//         () => {
//           console.log("file Written successfully");
//         }
//       );
//     });
//   });
// });

// console.log("Example of callBack helllll");

// How to create a server

// 1. crerate a server
const html = fs.readFileSync("./Template/index.html", "utf-8");
const server = http.createServer((Request, Response) => {
  Response.end(html);
  console.log("A new request received");
});

// 2. start the server

server.listen(8000, "127.0.0.1", () => {
  console.log("server started");
});
