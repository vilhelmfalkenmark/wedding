const express = require("express");
const router = express.Router(); // get an instance of the express Router
const MongoClient = require("mongodb").MongoClient;
import { view, lensPath, lensIndex } from "ramda";

const guestModel = {
  guests: "",
  attending: true,
  songs: ""
};

const guestsLens = lensPath(["body", "guests"]);
const attendingLens = lensPath(["body", "attending"]);
const songsLens = lensPath(["body", "songs"]);

module.exports = function(db) {
  router
    .route("/")
    //////////////////////////////////////////
    // POST
    //////////////////////////////////////////
    .post((request, response) => {
      const newGuest = Object.assign({}, guestModel, {
        guests: view(guestsLens, request),
        attending: view(attendingLens, request),
        songs: view(songsLens, request)
      });

      db.collection("guests").insertOne(newGuest,

      (err, doc) => {
        if (err) {
          return console.log(err, "error in post request");
        }
        response.status(201).json(view(lensIndex(0), doc.ops));
      });
    })
    //////////////////////////////////////////
    // GET
    //////////////////////////////////////////
    .get((request, res) => {
      res.json({
        svar: "funkar!"
      });
    });

  return router;
};
