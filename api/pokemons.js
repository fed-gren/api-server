const express = require("express");
const fs = require("fs");
const router = express.Router();

// get all data
router.get("/", function(req, res, next) {
  const pokemons = fs.readFileSync(__dirname + "/../db/pokemons.json");
  console.log(JSON.parse(pokemons));
  res.setHeader("Content-Type", "application/json");
  res.end(pokemons);
});

module.exports = router;
