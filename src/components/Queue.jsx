import React from "react";
import TicketList from "./TicketList";
import NewTicketControl from "./NewTicketControl";
import Ticket from "../models/ticket.js";

class Queue extends React.Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = {
      masterTicketList: [],
    };
    this.addNewTicketToList = this.addNewTicketToList.bind(this);
    this.updateTicketTimeSinceOpened = this.updateTicketTimeSinceOpened.bind(this);
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.timeSinceOpenedChecker = setInterval(() =>
      this.updateTicketTimeSinceOpened(),
      5000
    );
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount(){
    clearInterval(this.timeSinceOpenedChecker);
  }

  addNewTicketToList(newTicket){
    console.log(15);
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.push(newTicket);
    console.log('setState')
    this.setState({masterTicketList: newMasterTicketList});
  }

  updateTicketTimeSinceOpened() {
    console.log('check');
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.forEach((ticket) =>
      ticket.timeSinceOpened()
    );
    console.log('setState');
    this.setState({masterTicketList:newMasterTicketList})
  }

  render() {
    console.log('render');
    return (
      <div>
        <TicketList ticketList = {this.state.masterTicketList}/>
        <NewTicketControl onNewTicketCreation = {this.addNewTicketToList}/>
      </div>
    );
  }

}

export default Queue;
