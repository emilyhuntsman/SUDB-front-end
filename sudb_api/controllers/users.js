const express = require("express");
const users = express.Router();
const bodyParser = require("body-parser");
const User = require("../models/user.js");

users.use(bodyParser.urlencoded({ extended: true }));
users.use(express.json());

users.post("/", async (req, res) => {
  User.create(req.body, (error, createdUser) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).send(createdUser);
  });
});

users.get("/", (req, res) => {
  User.find({}, (err, foundUser) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundUser);
  });
});

users.get("/:user", (req, res) => {
  User.find({"username": req.params.user}, (err, foundUser) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    console.log(foundUser);
    res.status(200).json(foundUser);
  });
});

users.delete("/:id", (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, deletedUser) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(deletedUser);
  });
});

users.put("/:id", (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedUser) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(updatedUser);
    }
  );
});

users.get("/login/:user/:pw", (req, res) => {
  User.findOne({'username': req.params.user}, (err, foundUser) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundUser);
  });
});

users.put("/:user/:list/:title", (req, res) => {
  if (req.params.list === "future") {
    User.findOneAndUpdate({"username": req.params.user},{$push: { toread : req.params.title}},{ new: true },(err, updatedUser) => {
        if (err) {
          res.status(400).json({ error: err.message });
        }
        console.log(updatedUser);
        res.status(200).json(updatedUser);
      }
    );
  }
  if (req.params.list === "past") {
    User.findOneAndUpdate({"username": req.params.user},{$push: { read : req.params.title}},{ new: true },(err, updatedUser) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      console.log(updatedUser);
      res.status(200).json(updatedUser);
    }
  );
  }
});

module.exports = users;
