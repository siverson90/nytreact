import React, { Component } from "react";

import API from "../../utils/API";
import Input from "../../components/Input";

class Articles extends Component {

  state = {
    savedArticles: [],
    articles : [],
    title: "",
    startDate: "",
    endDate: ""
  };

  handleInputChange = event => {
    const { name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  // componentDidMount() {
  //   this.loadArticles();
  // }

  handleFormSubmit = event => {
    event.preventDefault();
    if(this.state.title && this.state.startDate && this.state.endDate) {
      API.getArticles ({
        title: this.state.title,
        startDate: this.state.startDate,
        endDate: this.state.endDate
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    }
  };

  // loadArticles = () => {
  //   API.getArticles()
  //   .then(res => this.setState({
  //     articles: res.data
  //   }, 
  //   console.log(res.data)
  //   ))
  //   .catch(err => console.log(err))
  // };

  render () {
    return (
      <div>
          <form>
            <Input 
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              placeholder="Enter your search term"
            />
            <Input
              value={this.state.startDate}
              onChange={this.handleInputChange}
              name="startDate"
              placeholder="YYYYMMDD"
             />
              <Input
              value={this.state.endDate}
              onChange={this.handleInputChange}
              name="endDate"
              placeholder="YYYYMMDD"
             />
             <button
              onClick={this.handleFormSubmit} > 
              Submit
             </button>
           </form>
        </div>
      );
    }
}

export default Articles;