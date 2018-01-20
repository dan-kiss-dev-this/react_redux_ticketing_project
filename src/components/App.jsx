import React from "react";
import Header from "./Header";
import TicketList from "./TicketList"
// import Ticket from "./Ticket"
import { Switch, Route } from 'react-router-dom';
import NewTicketForm from './NewTicketForm';
import Queue from "./Queue";
import NewTicketControl from "./NewTicketControl";

function App(props){
// function App(){
  return (
    <div>

      <Header/>
      {/* <Queue/> */}
      <Switch>
        {/* <Route exact path='/' component={Queue} /> */}
        <Route exact path='/'  />
        {/* <Route exact path='/' component={TicketList} /> find out how to do this */}
        <Route exact path='/newticket2' component={NewTicketForm,Queue} />
      </Switch>
    </div>
  );
}

export default App;
