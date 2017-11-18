const db = require("../models");

// Defining methods for the articleController
module.exports = {
  findAll: function(req, res) {
    console.log("get all route hit");
    res.send("get all route hit")
    // db.Article
      // .find(req.query)
      // .sort({ date: -1 })
      // .then(dbModel => res.json(dbModel))
      // .catch(err => res.status(422).json(err));
  },
   findAllSaved: function(req, res) {
    res.send("get all Saved route hit")
    // db.Article
      // .find(req.query)
      // .sort({ date: -1 })
      // .then(dbModel => res.json(dbModel))
      // .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log("get findById route hit");

    res.send("get findById route hit")
    // db.Article
    //   .findById(req.params.id)
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
     console.log("post create route hit");
     res.send("post to create a saved article route hit")
    // db.Article
    //   .create(req.body)
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    console.log("delete route hit");
    res.send("delete route hit that will remove from db")
    // db.Article
    //   .findById({ _id: req.params.id })
    //   .then(dbModel => dbModel.remove())
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  }
};