import React, { Component } from "react";

import Header from "../../components/Header";
import Query from "../../components/Query";
import Result from "../../components/Result";
import API from "../../utils/API";


class Articles extends Component {

  state = {
    articles : []
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
    .then(res => this.setState({
      articles: res.data
    }, 
    console.log(res.data)
    ))
    .catch(err => console.log(err))
  };

  render (){
    return (
      <div className="container">
        <Query />
        <Result />
      </div>

      )
  }
}

export default Articles;