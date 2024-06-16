const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");

const register = async (req, res) => {
  //create user
  const user = await User.create({ ...req.body });
  //generate token
  const token = user.createJWT();
  //send response
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  //get email and password from the request
  const { email, password } = req.body;
  if (!email || !password) {
    console.error("Enter Email or Password");
  }
  //check if user exists
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ error: "Invalid user" });
  }
  //check if password is correct
  const checkPassword = await user.comparePassword(password);
  if (!checkPassword) {
    return res.status(401).json({ error: "Invalid password" });
  }
  //send token
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};

module.exports = { login, register };
