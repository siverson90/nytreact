import React from "react";
import { Link } from "react-router-dom";

const Header = () =>
  <ul className="nav nav-pills">
    <li role="presentation" className="active"></li>
    <li role="presentation">
      <Link to="/">Articles</Link>
    </li>
    <li role="presentation">
      <Link to="/saved">Saved</Link>
    </li>
  </ul>

  export default Header;