const routes = require("express").Router();

module.exports = function(db) {
  routes.get("/", (req, res) => {
    res.json({
      message: "Välkommen till Villes och Johannas bröllops API"
    });
  });

  routes.use("/guests", require("./guests")(db)); // <-- Will live on endpoint /api/bears

  return routes;
};
