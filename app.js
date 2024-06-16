require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const movieRouter = require("./routes/movieRoute");
const authRouter = require("./routes/authRoute");
const authenticateUser = require("./middleware/authentication");

const app = express();
//middleware
app.use(express.json());

//routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/movies", authenticateUser, movieRouter);

//start the server
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Connected to DB...");
    app.listen(port, () => console.log(`Server listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
