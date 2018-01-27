const routes = require("express").Router();
const contentful = require("contentful");
// const ramda = require("ramda");
// const { view, lensPath } = ramda;

// let contentfulSpace = "";
// let contentfulToken = "";
// let instagramToken = "";

// if (process.env.NODE_ENV === "development") {
//   const apiKeys = require("../secrets");
//   contentfulSpace = view(lensPath(["contentfulKeys", "space"]), apiKeys);
//   contentfulToken = view(lensPath(["contentfulKeys", "accessToken"]), apiKeys);
//   instagramToken = view(lensPath(["instagramKeys", "accessToken"]), apiKeys);
// } else {
//   contentfulSpace = view(lensPath(["CONTENTFUL_SPACE"]), process.env);
//   contentfulToken = view(lensPath(["CONTENTFUL_SPACE"]), process.env);
//   instagramToken = view(lensPath(["INSTAGRAM_TOKEN"]), process.env);
// }

module.exports = function({ database, apiKeys }) {
  const client = contentful.createClient({
    space: apiKeys.contentfulKeys.CONTENTFUL_SPACE,
    accessToken: apiKeys.contentfulKeys.CONTENTFUL_ACCESS_TOKEN
  });

  routes.get("/", (req, res) => {
    res.json({
      message: "Välkommen till Villes och Johannas bröllops API"
    });
  });
  routes.use("/guests", require("./guests")(database)); // <-- Will live on endpoint /api/guests
  routes.use("/faq", require("./faq")(client)); // <-- Will live on endpoint /api/faq
  routes.use("/info", require("./info")(client)); // <-- Will live on endpoint /api/info
  routes.use(
    "/instagram",
    require("./instagram")(apiKeys.instagramKeys.INSTAGRAM_ACCESS_TOKEN)
  ); // <-- Will live on endpoint /api/instagram

  return routes;
};
