const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
let studentData = [];

app.use(cors());

app.get("/students", (req, res) => {
  res.send(studentData);
});
app.post("/student", (req, res) => {
  let stringData = "";
  req.on("data", (data) => {
    stringData += data;
  });
  //WHEN DATA READING IS COMPLETE
  req.on("end", () => {
    studentData.push= JSON.parse(stringData);
    res.end("Message posted successfully");
  });
});
 app.get("/",(req,res) => {
    res.end("page not found")
 });
 const server = http.createServer(app);
  server.listen(4200, () => {
    console.log("Server is running at http://localhost:4200/");
  });
