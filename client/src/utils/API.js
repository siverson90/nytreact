import axios from "axios";

export default {
  getArticles: function(query) {

    console.log(query);
    let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json"

    return axios.get(url, {params: {
      'api-key': "e7981d62d517436da9cf7106391a18c8",
      'q': query.title,
      'begin_date': query.startDate,
      'end_date': query.endDate
    }});
  }

};