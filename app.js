require("dotenv").config();

const express = require("express");
const connectDB = require("./db/connect");
const mainRouter = require("./routes/movieRoute");

const app = express();

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => res.send("Working..."));
app.use("/api/v1/movies", mainRouter);

//start the server
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log(`Server is listening on port ${port}...`);
  } catch (error) {
    console.log(error);
  }
};
start();
