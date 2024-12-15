const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Conectare la baza de date (MongoDB)
const DB_URI = process.env.DB_URI || "mongodb://127.0.0.1:27017/mydatabase";
mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Conectat la baza de date"))
  .catch((err) => console.log("Eroare la conectarea bazei de date:", err));

// Rute
app.get("/", (req, res) => {
  res.send("Serverul funcționează!");
});

// Pornire server
app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on http://0.0.0.0:3000");
});

// 192.168.1.128:3000
const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes);
