import React from "react";
import Header from "./Header";
import TicketList from "./TicketList"
// import Ticket from "./Ticket"
import { Switch, Route } from 'react-router-dom';
import NewTicketForm from './NewTicketForm';
import Queue from "./Queue";
import NewTicketControl from "./NewTicketControl";
import { Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';

function App(props){
  let history= createHistory();
// function App(){
  return (
    <div>

      <Header/>
      <Queue/>
      <Router history={history}>
        <Switch>
          <Route exact path='/'  />
          <Route exact path='/newticket2' component={NewTicketForm,Queue} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
