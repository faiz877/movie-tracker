const express = require("express");
const router = express.Router();

const {
  createMovie,
  getMovie,
  getAllMovies,
  updateMovie,
  deleteMovie,
} = require("../controllers/movieController");

router.route("/").get(getAllMovies).post(createMovie);
router.route("/:title").get(getMovie).patch(updateMovie).delete(deleteMovie);

module.exports = router;
