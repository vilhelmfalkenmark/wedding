import express from "express";
import bodyParser from "body-parser";
import mongodb from "mongodb";

const app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000; // set our port

// Handle CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

mongodb.MongoClient.connect(process.env.MONGODB_URI, (err, database) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  console.log("Ansluten till mongodb databas");
  // ROUTES FOR THE API
  const router = require("./routes/")(database); // get an instance of the express Router
  // REGISTER OUR ROUTES
  app.use("/api", router);
  console.log("Bröllops apiet mår bra!");
  app.listen(port);
});
