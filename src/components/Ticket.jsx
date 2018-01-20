import React from "react";
// import PropTypes from "prop-types";


function Ticket(props){

  // let coolLook = {
  //   color: '#66CDAA',
  //   borderRadius: '4px',
  //   padding: '5px',
  //   backgroundColor: '#E0FFFF',
  // }
  return (
    <div >
      {/* <div style={coolLook}> */}
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <p>{props.timeSinceOpened}</p>
      <hr/>
    </div>
  );
}


export default Ticket;
