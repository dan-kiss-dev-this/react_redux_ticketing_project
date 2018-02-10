import React from "react";
import { Link } from 'react-router-dom';
import line from '../assets/images/line.jpg';
import { Router, Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory';

function Header(props) {
  let coolLook = {
    backgroundColor: "#20B2AA",
    borderRadius: "4px",
    padding: "5px",
    color: "#E0FFFF",
  };
  let my_image = {
    height: "100px",
    margin: "20px",
    borderRadius: "5px",
  };
  let links = {
    fontSize: "16px",
    color: "white",
  };
  let history= createHistory();

  return (
    <div style = {coolLook}>
      <h1>Help Queue</h1>
      <Router history={history}>
        <div>

          <Link style={links} to="/">Home</Link> | <Link style={links} to="/newticket2">Create Tickets</Link>
        </div>
      </Router>
      <p><img src={line} style={my_image}/></p>

    </div>
  );
}

export default Header;
