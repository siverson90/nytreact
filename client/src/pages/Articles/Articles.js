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


  seeState (){
    console.log(this.state.articles)
  }

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
      .then(res => {
        
        let data = res.data.response.docs;
         console.log(data);
        console.log(data.length);
        for (var i = 0; i < data.length; i++) {
          console.log("************")
          console.log(data[i].headline.main)
          console.log(data[i].web_url)
          console.log(data[i].pub_date)
        }

        // return this.state({articles: res.data})
      })
      .catch(err => console.log(err));
    }
  };
     
      // {
      //   // let data = res.data.response.docs;
      //   // console.log(data);
      //   // console.log(data.length);
      //   // for (let i = 0; i < data.length; i++) {
      //   //   console.log(data[i].web_url)
      //     // console.log(res.data.response[i].web_url)
      //     // console.log(res.data.response[i].web_url)
      //   }
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
           <div>
             {/*<ul className="list-group">
                         {this.state.articles.map(item => (
                           <li className="list-group-item" key={item.id}>
                             {item.title}
                             {item.headline}
                           </li>
                             ))}
                           </ul>*/}
           </div>
        </div>
      );
    }
}

export default Articles;