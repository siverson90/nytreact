const router = require("express").Router();
const articleController = require("../../controller/articleController.js");

  router.route("/")
  .post(articleController.create);

  router.route("/saved")
  .get(articleController.findAll)

  router.route("/saved/:id")
  .delete(articleController.delete)

  module.exports = router;