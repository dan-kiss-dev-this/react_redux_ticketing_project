import React from "react";
import TicketList from "./TicketList";
import NewTicketControl from "./NewTicketControl";

class Queue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: [],
    };
    this.addNewTicketToList = this.addNewTicketToList.bind(this);
  }

  addNewTicketToList(newTicket){
    console.log(15);
    var newMasterTicketList = this.state.masterTicketList;
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList})
  }

  render() {
    return (
      <div>
        <TicketList ticketList = {this.state.masterTicketList}/>
        <NewTicketControl onNewTicketCreation = {this.addNewTicketToList}/>
      </div>
    );
  }

}

export default Queue;

// old
// function Queue(props){
//   return(
//     <div>
//       <TicketList/>
//       <NewTicketControl/>
//     </div>
//   );
// }
