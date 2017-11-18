const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Matches with "/api/article"
router.route("/")
  .get(articleController.findAll)
  .post(articleController.create);

// Matches with "/api/article/saved"
router
  .route("/saved")
  .get(articleController.findAllSaved)
  

router
  .route("/saved/:id")
  .delete(articleController.remove);

module.exports = router;
