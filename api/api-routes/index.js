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

// const MongoClient = require("mongodb").MongoClient;
//
// const MONGO_URL = process.env.MONGODB_URI;
//
// MongoClient.connect(MONGO_URL, (err, db) => {
//   if (err) {
//     return console.log(err);
//   }
//
//   // Do something with db here, like inserting a record
//   db.collection("guests").insertOne({
//     guests: "Hello MongoDB",
//     text: "Hopefully this works!"
//   },
//   function(err, res) {
//     if (err) {
//       db.close();
//       return console.log(err);
//     }
//     // Success
//     db.close();
//   });
// });
