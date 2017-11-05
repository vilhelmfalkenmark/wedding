const router = require("express").Router();
const promiseResolve = data =>
  new Promise((resolve, reject) => {
    resolve(data);
    reject(err => {
      throw new Error(err, " error");
    });
  });

module.exports = contentful => {
  router
    .route("/")
    //////////////////////////////////////////
    // GET REQUEST FOR ALL FAQS
    //////////////////////////////////////////
    .get((request, response) => {
      const info = contentful
        .getEntries({ content_type: "landing-page" })
        .then(entry => entry.items.map(item => item.fields))
        .catch(err => {
          return "Kunde inte hämta info från contentful";
        });
      promiseResolve(info)
        .then(data => {
          response.json({
            data: data[0]
          });
        })
        .catch(e => {
          response.json({
            data: "Error när info skulle hämtas"
          });
        });
    });

  return router;
};
