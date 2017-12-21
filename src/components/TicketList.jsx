import React from "react";
import Ticket from "./Ticket";

var masterTicketList = [
  {
    names: "Thato and Haley",
    location: "3A",
    issue: "Firebase won't save record. Halp."
  },
  {
    names: "Sleater and Kinney",
    location: "4B",
    issue: "Fox image not displaying on page, can only see duck?"
  },
  {
    names: "Imani & Jacob",
    location: "9F",
    issue: "Donkey picture not displaying on hover in Zoology app. :("
  }
]

class TicketList extends React.Component {
  render() {
    return (
      <div>
        <hr/>
        {masterTicketList.map((ticket, index) =>
          <Ticket names={ticket.names}
                  location={ticket.location}
                  issue={ticket.issue}
                  key={index}/>
        )}
      </div>
    );
  }
}

export default TicketList;

// old below
// function TicketList(props){
//
//   return (
//     <Ticket
//       location="3ay"
//       names="Thato and Haley"
//       issue="Firebase won't save record"/>
//   );
// }
