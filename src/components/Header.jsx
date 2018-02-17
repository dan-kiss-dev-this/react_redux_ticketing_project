import React from "react";
import styles from './styles/Header.css';
import { Link } from 'react-router-dom';

function Header(props) {
  let coolLook = {
    backgroundColor: "#20B2AA",
    borderRadius: "4px",
    padding: "5px",
    color: "#E0FFFF",
  };
  return (
    <div style = {coolLook}>
      <h1>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/admin">Admin</Link>
    </div>
  );
}

export default Header;
