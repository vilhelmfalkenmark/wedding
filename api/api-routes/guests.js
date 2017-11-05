const express = require("express");
const ObjectID = require("mongodb").ObjectID;
const router = express.Router();
const GUEST_COLLECTION = "guests";
const ramda = require("ramda");

const { view, lensPath, lensIndex } = ramda;

const guestModel = {
  guests: "",
  songRequest: "",
  mail: "",
  allergies: "",
  attending: true
};

const guestsLens = lensPath(["body", "data", "guests"]);
const songRequestLens = lensPath(["body", "data", "songRequest"]);
const mail = lensPath(["body", "data", "mail"]);
const allergiesLens = lensPath(["body", "data", "allergies"]);
const attendingLens = lensPath(["body", "data", "attending"]);

module.exports = db => {
  router
    .route("/")
    //////////////////////////////////////////
    // POST REQUEST
    //////////////////////////////////////////
    .post((request, response) => {
      console.log(request.body, "request.body");
      const newGuest = Object.assign({}, guestModel, {
        guests: view(guestsLens, request),
        songRequest: view(songRequestLens, request),
        mail: view(mail, request),
        allergies: view(allergiesLens, request),
        attending: view(attendingLens, request)
      });

      db.collection(GUEST_COLLECTION).insertOne(newGuest, (err, doc) => {
        if (err) {
          response.json({
            error: "error in post request"
          });
          return console.log(err, "error in post request");
        }
        response.status(201).json(view(lensIndex(0), doc.ops));
      });
    })
    //////////////////////////////////////////
    // GET REQUEST FOR ALL GUESTS
    //////////////////////////////////////////
    .get((request, response) => {
      db
        .collection(GUEST_COLLECTION)
        .find({})
        .toArray(function(err, data) {
          if (err) {
            response.json({
              error: "error in get request for all guests"
            });
            return console.log(err, "error in get request");
          } else {
            response.status(200).json({
              data
            });
          }
        });
    });
  //////////////////////////////////////////
  // GET REQUEST FOR SINGLE GUESTS
  //////////////////////////////////////////
  router.route("/:guest_id").get((request, response) => {
    db
      .collection(GUEST_COLLECTION)
      .findOne({ _id: new ObjectID(request.params.guest_id) }, (err, doc) => {
        if (err) {
          response.json({
            error: "error in get request for single guests"
          });
          return console.log(err, "error in get single guest request");
        } else {
          response.status(200).json(doc);
        }
      });
  });

  return router;
};
