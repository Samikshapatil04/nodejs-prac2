const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");

let studentData = [];

app.use(cors());
app.use(express.json());  

app.get("/get-messages", (req, res) => {
  res.send(studentData);
});

app.post("/post-messages", (req, res) => {
  studentData.push(req.body);  
  res.end("Message posted successfully");
});


app.get("/", (req, res) => {
  res.end("Page not found");
});

const server = http.createServer(app);
server.listen(4200, () => {
  console.log("Server is running at http://localhost:4200/");
});
