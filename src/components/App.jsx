import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";
import NewTicketControl from "./NewTicketControl";

function App(props){
  return (
    <div>
      <Header/>
      <TicketList/>
      <NewTicketControl/>
    </div>
  );
}

export default App;
