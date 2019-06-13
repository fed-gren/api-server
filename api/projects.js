const express = require("express");
const fs = require("fs");
const router = express.Router();

// get all data
router.get("/", function(req, res, next) {
  const projects = fs.readFileSync(__dirname + "/../db/projects.json");
  console.log(JSON.parse(projects));
  res.setHeader("Content-Type", "application/json");
  res.end(projects);
});

module.exports = router;
