const Movie = require("../models/Movie");
const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");

const createMovie = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const movie = await Movie.create(req.body);
  res.status(StatusCodes.CREATED).json({ movie });
};
const getAllMovies = async (req, res) => {
  const movie = await Movie.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ movie });
};
const getMovie = async (req, res) => {
  const { title } = req.params; // Assume the title is passed as a route parameter
  try {
    const movie = await Movie.findOne({ title });
    if (!movie) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: "Movie not found" });
    }
    res.status(StatusCodes.OK).json({ movie });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
};
const updateMovie = async (req, res) => {
  const {
    body: { title, director, year, genre },
    user: { userId },
    params: { title: movieTitle },
  } = req;

  if (!title || !director || !year || !genre) {
    throw new BadRequestError(
      "Title, Director, Year, and Genre fields cannot be empty"
    );
  }

  const movie = await Movie.findOneAndUpdate(
    { title: movieTitle, createdBy: userId },
    { title, director, year, genre },
    { new: true, runValidators: true }
  );
  if (!movie) {
    throw new NotFoundError(`No movie with title ${movieTitle}`);
  }
  res.status(StatusCodes.OK).json({ movie });
};
const deleteMovie = async (req, res) => {
  const {
    user: { userId },
    params: { title: movieTitle },
  } = req;

  if (!movieTitle) {
    throw new BadRequestError("Movie title must be provided");
  }

  const movie = await Movie.findOneAndDelete({
    title: movieTitle,
    createdBy: userId,
  });

  if (!movie) {
    throw new NotFoundError(`No movie with title ${movieTitle}`);
  }

  res.status(StatusCodes.OK).json({ message: "Movie deleted successfully" });
};

module.exports = {
  createMovie,
  getMovie,
  getAllMovies,
  updateMovie,
  deleteMovie,
};
