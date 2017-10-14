// app.use(express.static("../../client/build/"));
// app.use(express.static(__dirname + "/src"));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve("../../client/build/", "index.html"));
// });

const routes = require("express").Router();
const express = require("express");
const path = require("path");

routes.use(express.static(path.resolve(__dirname, "../../client/build")));

routes.get("/", (req, res) => {
  // <-- Will live on endpoint /api
  res.sendFile(path.resolve(__dirname, "../../client/build", "index.html"));
});

module.exports = routes;
