require("dotenv").config();
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  //check header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.log("Auth Error");
  }
  const token = authHeader.split(" ")[1];
  //verify jwt
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId, name: payload.name };
  } catch (error) {
    console.log("Invalid Auth");
  }
  next();
};

module.exports = auth;
