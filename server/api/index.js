const express = require("express");
const contentful = require("contentful");
const router = express.Router();

module.exports = function({ database, apiKeys }) {
  const contentfulClient = contentful.createClient({
    space: apiKeys.CONTENTFUL_SPACE,
    accessToken: apiKeys.CONTENTFUL_ACCESS_TOKEN
  });

  router.get("/", (req, res) => {
    res.json({ message: "Välkommen till Villes och Johannas bröllops API" });
  });
  router.use("/guests", require("./guests")(database)); // <-- Will live on endpoint /api/guests
  router.use("/faq", require("./faq")(contentfulClient)); // <-- Will live on endpoint /api/faq
  router.use("/info", require("./info")(contentfulClient)); // <-- Will live on endpoint /api/info
  router.use(
    "/instagram",
    require("./instagram")(apiKeys.INSTAGRAM_ACCESS_TOKEN)
  ); // <-- Will live on endpoint /api/instagram

  return router;
};
