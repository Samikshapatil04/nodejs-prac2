
const http = require("http");

// let messageArray = [];

function myFunction(a, b, c) {
  let result = a + b + 100;
  c();
  return a + b;
}

function myCallback() {
  console.log("callback function executed");
}

let z = myFunction(5, 10, myCallback);
console.log("my function is", z);

const server = http.createServer((req, res) => {
  console.log(req.headers["user-agent"]);

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("access-control-allow-methods", "GET, POST, OPTIONS");
  res.setHeader("access-control-Allow-Headers", "content-type");

  const studentData = [
    {
      message: "Hello world",
      name: "Yash dhapke",
    },
    {
      message: "Hello World.js",
      name: "Mayur Uchil",
    },
    {
      message: "Hello Express.js",
      name: "Ayush L",
    },
  ];

  if (req.url === "/students") {
    res.writeHead(200, { "content-type": "application/xml" });
    res.write(`<?xml version="1.0" encoding="UTF-8"?> <students>`);

    studentData.forEach((x) => {
      res.write(`<student>
      <message>${x.message}</message>
      <name>${x.name}</name>
      </student>`);
    });
    res.write(`</students>`);

    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.write("Not Found");
    res.end();
  }

  //   if ( req.url === "/get-messages") {
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
});
server.listen(4000, () => {
  console.log("Server is running at http://localhost:4000/");
});




// IN JSON FORMAT
// if (req.url === "/students") {
//   res.writeHead(200, { "content-type": "application/json" });
//   res.end(JSON.stringify(studentData));
//   res.end();
// } else {
//   res.writeHead(404, { "content-type": "text/plain" });
//   res.write("Not Found");
//   res.end();
// }


// IN XML FORMAT
// if (req.url === "/students") {
//   res.writeHead(200, { "content-type": "application/xml" });
//   res.write(`<?xml version="1.0" encoding="UTF-8"?> <students>`);
//   studentData.forEach((x) => {
//     res.write(`<student>
//     <message>${x.message}</message>
//     <name>${x.name}</name>
//     </student>`);
//   });
//   res.write(`</students>`);

 
