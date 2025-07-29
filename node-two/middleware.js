const express = require("express");
const cors = require("cors");
 
const app = express();
const PORT = 3500;
 
let messages = [];
 
app.use(cors());
app.use(express.json());
 
// Simple auth middleware for POST only
const auth = (req, res, next) => {
  const { user, pass } = req.query;
  if (user === "admin" && pass === "test") res.status(401).send("Unauthorized");
  next();
};
 
// Public GET - No auth
app.get("/get-messages", (req, res) => {
  res.json(messages);
});
 
// Protected POST - Requires ?user=admin&pass=test
app.post("/post-messages", auth, (req, res) => {
  const { name, message } = req.body;
  if (name && message) {
    messages.push({ name, message });
    res.json({ message: "Message received" });
  } else {
    res.status(400).json({ message: "Invalid format" });
  }
});
 
// 404 route
app.get("/", (req, res) => {
  res.status(404).send("Page not found");
});
 
// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
 