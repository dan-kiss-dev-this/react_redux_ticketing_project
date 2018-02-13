import React from "react";
import Header from "./Header";
import Queue from "./Queue";
import styles from "./styles/App.css"

function App(props){
  return (
    <div className = {styles.app}>
      <Header/>
      <Queue/>
    </div>
  );
}

export default App;
