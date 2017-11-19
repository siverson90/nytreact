import React from "react";

const Form = () =>
<div>
  <form>
    <div className="form-group">
      <label for="searchTopic">Search Topic</label>
      <input type="text" className="form-control" id="searchTopic" placeholder="Enter your search term"/>
    </div>
    <div className="form-group">
      <label for="start-date">Start Year</label>
      <input type="date" className="form-control" id="start-date" placeholder="ex. 2015"/>
    </div>
    <div className="form-group">
      <label for="end-date">End Year</label>
      <input type="date" id="end-date" className="form-control" placeholder="ex. 2017"/>
    </div>
    <button type="submit" className="btn btn-default">Submit</button>
  </form>
</div>


export default Form;