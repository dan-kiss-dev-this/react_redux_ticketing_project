import React from "react";
import TicketList from "./TicketList";
import NewTicketControl from "./NewTicketControl";
import { connect } from 'react-redux';

class Queue extends React.Component {

  constructor(props) {
    super(props);
    this.updateTicketTimeSinceOpened = this.updateTicketTimeSinceOpened.bind(this);
  }

  componentDidMount() {
    this.timeSinceOpenedChecker = setInterval(() =>
      this.updateTicketTimeSinceOpened(),
      15000
    );
  }
  componentWillUnmount(){
    clearInterval(this.timeSinceOpenedChecker);
  }

  updateTicketTimeSinceOpened() {
    //code below refreshes time waiting in ticket.jsx
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <TicketList ticketList = {this.props.masterTicketList}/>
        <NewTicketControl />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    masterTicketList : state
  }
}


export default connect(mapStateToProps)(Queue);
