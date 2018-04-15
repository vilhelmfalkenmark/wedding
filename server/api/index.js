const express = require("express");
const contentful = require("contentful");
const router = express.Router();

module.exports = function({ database, apiKeys }) {
  const client = contentful.createClient({
    space: apiKeys.contentfulKeys.CONTENTFUL_SPACE,
    accessToken: apiKeys.contentfulKeys.CONTENTFUL_ACCESS_TOKEN
  });

  router.get("/", (req, res) => {
    res.json({ message: "Välkommen till Villes och Johannas bröllops API" });
  });
  router.use("/guests", require("./guests")(database)); // <-- Will live on endpoint /api/guests
  router.use("/faq", require("./faq")(client)); // <-- Will live on endpoint /api/faq
  router.use("/info", require("./info")(client)); // <-- Will live on endpoint /api/info
  router.use(
    "/instagram",
    require("./instagram")(apiKeys.instagramKeys.INSTAGRAM_ACCESS_TOKEN)
  ); // <-- Will live on endpoint /api/instagram

  return router;
};
