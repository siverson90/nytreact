const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Matches with "/api/article/saved"
router
  .route("/saved")
  .get(articleController.findAllSaved)
  

router
  .route("/saved/:id")
  .delete(articleController.remove);

  // Matches with "/api/article"
router
  .route("/")
  .get( (req, res) => {
  axios
    .get("http://www.recipepuppy.com/api/", { params: req.query } )
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
  })
  .post(articleController.create);

// query API syntax
// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// url += '?' + $.param({
//   'api-key': "e7981d62d517436da9cf7106391a18c8",
//   'q': "trump",
//   'begin_date': "20160101",
//   'end_date': "20170101"


module.exports = router;
