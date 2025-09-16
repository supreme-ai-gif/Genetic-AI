const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Example API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Vercel + Express + CORS 🚀" });
});

module.exports = app;￼Enter
