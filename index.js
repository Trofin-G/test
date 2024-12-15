const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const mongoURI = process.env.MONGO_URI || "mongodb+srv://trofing98:wGgP7CiBZHlmUAwT@teste.uoydm.mongodb.net/?retryWrites=true&w=majority&appName=Teste";

const connectDB = async () => {
  try {
      await mongoose.connect(mongoURI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });
      console.log("MongoDB connected!");
  } catch (err) {
      console.error("Error connecting to MongoDB", err);
      process.exit(1);
  }
};

// Rute
app.get("/", (req, res) => {
  res.send("Serverul funcționează!w2");
});

// Pornire server
app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on http://0.0.0.0:3000");
});

// 192.168.1.128:3000
const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes);


module.exports = connectDB;

