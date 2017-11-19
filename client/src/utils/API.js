import axios from "axios";

export default {
  getArticles: function(query) {

    let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json"

    return axios.get(url, {params: {
      'api-key': "e7981d62d517436da9cf7106391a18c8",
      'q': "trump",
      'begin_date': "20160101",
      'end_date': "20170101"
    }});
  }

};

// (req, res) => {
//   axios
//     .get("http://www.recipepuppy.com/api/", { params: req.query } )
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
//   })


// query API syntax
// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// url += '?' + $.param({
//   'api-key': "e7981d62d517436da9cf7106391a18c8",
//   'q': "trump",
  