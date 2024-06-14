const createMovie = (req, res) => {
  res.send("Create Movie");
};
const getMovie = (req, res) => {
  res.send("Get Movie");
};
const getAllMovies = (req, res) => {
  res.send("Get All Movies");
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
