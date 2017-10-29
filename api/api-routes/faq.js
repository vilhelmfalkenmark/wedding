const router = require("express").Router();
// const ramda = require("ramda");
// const { view, lensPath, lensIndex } = ramda;

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
      const faqs = contentful
        .getEntries({ content_type: "faq" })
        .then(entry => entry.items.map(item => item.fields))
        .catch(err => {
          return "Kunde inte hämta faq data från contentful";
        });
      promiseResolve(faqs)
        .then(data => {
          response.json({
            data
          });
        })
        .catch(e => {
          response.json({
            data: "Error"
          });
        });
    });

  return router;
};
