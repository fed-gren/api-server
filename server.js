const express = require("express");
const hostname = "127.0.0.1";
const port = 3000;

const app = express();
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// API
app.use("/api/projects", require("./api/projects"));
app.use("/api/pokemons", require("./api/pokemons"));

app.listen(process.env.PORT || port, () => {
  console.log(`Running on http://${hostname}:${port}/`);
});
