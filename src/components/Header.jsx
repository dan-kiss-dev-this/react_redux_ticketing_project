import React from "react";
import styles from './styles/Header.css';

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
    </div>
  );
}

export default Header;
