
const http = require("http");

let messageArray = [];

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("access-control-allow-methods", "GET, POST, OPTIONS");
  res.setHeader("access-control-Allow-Headers", "content-type");

  if (req.url === "/get-messages") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(messageArray));
  } else if (req.url === "/post-messages") {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
      console.log(chunk);
    });
    req.on(
      "end",
      () => {
        messageArray.push(data);
        res.writeHead(200, { "content-type": "text/json" });
        res.end("Message posted successfully");
      });
  } else {
    res.writeHead(404, {
      "content-type": "text/json",
    });
    res.end("Not Found");
  }
});
server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000/");
});



// // const http = require("http"); 
// let messageArray = [];
// const server = http.createServer((req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("access-control-allow-methods", "GET, POST, OPTIONS");
//   res.setHeader("access-control-Allow-Headers", "content-type");
//   if (req.method === "GET" && req.url === "/get-messages") {
//     res.writeHead(200, { "content-type": "application/json" });
//     res.end(JSON.stringify(messageArray));
//   } else if (req.url === "/post-messages") {
//     let data = "";
//     req.on("data", (chunk) => {
//       data += chunk;
//       console.log(chunk);
//     });
//     req.on(
//       "end",
//       () => {
//         messageArray.push(data);
//         res.writeHead(200, { "content-type": "text/plain" });
//         res.end("Message posted successfully");
//       });
//   } else {
//     res.writeHead(404, {
//       "content-type": "text/plain",
//     });
//     res.end("Not Found");
//   }
// });
// server.listen(3000, () => {
//   console.log("Server is running at http://localhost:3000/");
// });
