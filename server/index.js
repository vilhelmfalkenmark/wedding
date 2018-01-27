const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const path = require("path");
const app = express();
const ramda = require("ramda");
const { view, lensPath } = ramda;

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
let apiKeys = {};

// let MONGODB_URI = "";
if (process.env.NODE_ENV === "development") {
  apiKeys = require("./secrets");
} else {
  apiKeys.instagramKeys = {
    INSTAGRAM_ACCESS_TOKEN: view(
      lensPath(["INSTAGRAM_ACCESS_TOKEN"]),
      process.env
    )
  };
  apiKeys.contentfulKeys = {
    CONTENTFUL_SPACE: view(lensPath(["CONTENTFUL_SPACE"]), process.env),
    CONTENTFUL_ACCESS_TOKEN: view(
      lensPath(["CONTENTFUL_ACCESS_TOKEN"]),
      process.env
    )
  };
  apiKeys.mongoDBKeys = {
    MONGODB_URI: view(lensPath(["MONGODB_URI"]), process.env)
  };
}

// Create link to React build directory
app.use(express.static(path.resolve(__dirname, "../build"))); // <-- Tydligen ska index, root, whatever ligga överst.

// Handle CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,application/json, Accept"
  );
  next();
});

mongodb.MongoClient.connect(
  apiKeys.mongoDBKeys.MONGODB_URI,
  (err, database) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }

    // REGISTER ROUTES FOR API ROUTES
    const apiRouter = require("./api")({ database, apiKeys });
    app.use("/api", apiRouter);
    // Redirect every 404 to the index.html file
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../build", "index.html"));
    });

    app.listen(PORT, () => {
      console.log("Ansluten till mongodb databas och Bröllops apiet mår bra!");
    });
  }
);
