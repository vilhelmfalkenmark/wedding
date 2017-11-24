const routes = require("express").Router();
const contentful = require("contentful");

const client = contentful.createClient({
  space: "i475v397s60m",
  accessToken:
    "e141b6e6f8f9e14ecc965f9400199e0047dd3fd88fd3588a7ba6e5f929f71942"
});

module.exports = function(db) {
  routes.get("/", (req, res) => {
    res.json({
      message: "Välkommen till Villes och Johannas bröllops API"
    });
  });
  routes.use("/guests", require("./guests")(db)); // <-- Will live on endpoint /api/guests
  routes.use("/faq", require("./faq")(client)); // <-- Will live on endpoint /api/faq
  routes.use("/info", require("./info")(client)); // <-- Will live on endpoint /api/info

  return routes;
};
