const express = require("express");
const router = express.Router();

const { createMovie } = require("../controllers/movieController");

router.route("/").post(createMovie);

module.exports = router;