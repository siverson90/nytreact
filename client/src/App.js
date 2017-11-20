import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Articles from "./pages/Articles";
import Header from "./components/Header";
import Saved from "./pages/Saved";


const App = () =>
  <Router>
    <div>
    <Header />
     <Switch>
      <Route exact path="/" component={Articles}/>
      <Route exact path="/saved" component={Saved}/>
     </Switch>
    </div>
  </Router>;

export default App;