const http = require("http");
 
let studentData = []; 
 
const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
 
  if (req.method === "GET" && req.url === "/students") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(studentData));
 
  } else if (req.method === "POST" && req.url === "/student") {
    let stringData = "";
    // read data from request
    req.on("data", (data) => {
      stringData += data;
    });
//  when data reading is complete 
    req.on("end", () => {
      console.log(stringData);
      const student = JSON.parse(stringData);
      studentData.push(student);
    //   send response
      res.writeHead(200, { "content-type": "application/json" });
      res.write("Message posted successfully");
      res.end();
    });
 
  } else {
    res.writeHead(200, { "content-type": "application/json" });
    res.write("Hello World");
    res.end();
  }
});
 
server.listen(4000, () => {
  console.log("Server is running at http://localhost:4000/");
});