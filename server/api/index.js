const routes = require("express").Router();
const contentful = require("contentful");
const ramda = require("ramda");
const { view, lensPath } = ramda;

let contentfulSpace = "";
let contentfulToken = "";
let instagramToken = "";

if (process.env.NODE_ENV === "development") {
  const apiKeys = require("../secrets");
  contentfulSpace = view(lensPath(["contentfulKeys", "space"]), apiKeys);
  contentfulToken = view(lensPath(["contentfulKeys", "accessToken"]), apiKeys);
  instagramToken = view(lensPath(["instagramKeys", "accessToken"]), apiKeys);
} else {
  contentfulSpace = view(lensPath(["CONTENTFUL_SPACE"]), process.env);
  contentfulToken = view(lensPath(["CONTENTFUL_SPACE"]), process.env);
  instagramToken = view(lensPath(["INSTAGRAM_TOKEN"]), process.env);
}

const client = contentful.createClient({
  space: contentfulSpace,
  accessToken: contentfulToken
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
  routes.use("/instagram", require("./instagram")(instagramToken)); // <-- Will live on endpoint /api/instagram

  return routes;
};
