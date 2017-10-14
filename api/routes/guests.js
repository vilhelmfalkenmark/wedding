import { view, lensPath, lensIndex } from "ramda";
import express from "express";
import { ObjectID } from "mongodb";

const router = express.Router();

const GUEST_COLLECTION = "guests";

const guestModel = {
  guests: "",
  attending: true,
  songs: "",
  email: "test@gmail.com"
};

const guestsLens = lensPath(["body", "guests"]);
const attendingLens = lensPath(["body", "attending"]);
const songsLens = lensPath(["body", "songs"]);
const emailLens = lensPath(["body", "songs"]);

module.exports = function(db) {
  router
    .route("/")
    //////////////////////////////////////////
    // POST REQUEST
    //////////////////////////////////////////
    .post((request, response) => {
      const newGuest = Object.assign({}, guestModel, {
        guests: view(guestsLens, request),
        attending: view(attendingLens, request),
        songs: view(songsLens, request),
        email: view(emailLens, request)
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
        .toArray(function(err, docs) {
          if (err) {
            response.json({
              error: "error in get request for all guests"
            });
            return console.log(err, "error in get request");
          } else {
            response.status(200).json(docs);
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
