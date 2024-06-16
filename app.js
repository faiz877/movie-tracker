require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const movieRouter = require("./routes/movieRoute");
const authRouter = require("./routes/authRoute");
const authenticateUser = require("./middleware/authentication");

//extra security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

const app = express();
//middleware
app.set("trust-proxy", 1);
app.use(express.json());
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  })
);
app.use(cors());
app.use(helmet());
app.use(xss());

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
