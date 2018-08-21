const ramda = require("ramda");
const mongoDB = require("mongodb");
const express = require("express");

const { view, lensPath, lensIndex } = ramda;
const { ObjectID } = mongoDB;

const router = express.Router();

const GUEST_COLLECTION = "guests";

const guestModel = {
  guests: "",
  songRequest: "",
  mail: "",
  allergies: "",
  relationship: "",
  attending: true
};

const guestsLens = lensPath(["body", "data", "guests"]);
const songRequestLens = lensPath(["body", "data", "songRequest"]);
const mailLens = lensPath(["body", "data", "mail"]);
const allergiesLens = lensPath(["body", "data", "allergies"]);
const attendingLens = lensPath(["body", "data", "attending"]);
const relationshipLens = lensPath(["body", "data", "relationship"]);

module.exports = db => {
  router
    .route("/")
    //////////////////////////////////////////
    // POST REQUEST
    //////////////////////////////////////////
    .post((request, response) => {
      const newGuest = Object.assign({}, guestModel, {
        guests: view(guestsLens, request),
        songRequest: view(songRequestLens, request),
        mail: view(mailLens, request),
        allergies: view(allergiesLens, request),
        relationship: view(relationshipLens, request),
        attending: view(attendingLens, request)
      });
      // response.status(404);
      db.collection(GUEST_COLLECTION).insertOne(newGuest, (err, doc) => {
        if (err) {
          response.json({ error: "error in post request" });
          return console.log(err, "error in post request");
        }
        response.status(201).json(view(lensIndex(0), doc.ops));
      });
    })
    //////////////////////////////////////////
    // GET REQUEST FOR ALL GUESTS
    //////////////////////////////////////////
    .get((request, response) => {
      db.collection(GUEST_COLLECTION)
        .find({})
        .toArray(function(err, data) {
          if (err) {
            response.json({ error: "error in get request for all guests" });
            return console.log(err, "error in get request");
          } else {
            response.status(200).json({ data });
          }
        });
    });
  //////////////////////////////////////////
  // GET REQUEST FOR SINGLE GUESTS
  //////////////////////////////////////////
  router.route("/:guest_id").get((request, response) => {
    db.collection(GUEST_COLLECTION).findOne(
      { _id: new ObjectID(request.params.guest_id) },
      (err, data) => {
        if (err) {
          response.json({
            error: "error in get request for single guests"
          });
        } else {
          // response.status(404);
          // NOTE If guest could not be found a null
          // value will be returned without an error
          if (data) {
            response.status(200).json({
              data
            });
          } else {
            response.status(404).json({
              data
            });
          }
        }
      }
    );
  });

  return router;
};
