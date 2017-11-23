const db = require("../models");

module.exports = {
  create: function(req, res) {
    console.log(req.body);
    db.Saved
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
  },
  findAll: function(req,res) {
    db.Saved
    .find({})
    .sort({createdAt: -1})
    .then(dbModel => res.json(dbModel))
    .catch(exportsr => res.status(422).json(err))
  }
  
}