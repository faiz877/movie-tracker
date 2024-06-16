const Movie = require("../models/Movie");
const { StatusCodes } = require("http-status-codes");

const createMovie = async (req, res) => {
  const movie = await Movie.create(req.body);
  res.status(StatusCodes.CREATED).json({ movie });
};
const getAllMovies = async (req, res) => {
  const movie = await Movie.find();
  res.status(StatusCodes.OK).json({ movie });
};
const getMovie = (req, res) => {
  res.send("Get Movie");
};
const updateMovie = (req, res) => {
  res.send("Update Movie");
};
const deleteMovie = (req, res) => {
  res.send("Delete Movie");
};

module.exports = {
  createMovie,
  getMovie,
  getAllMovies,
  updateMovie,
  deleteMovie,
};
