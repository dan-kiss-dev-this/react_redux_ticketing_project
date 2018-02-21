import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

function Ticket(props){
  const ticketInformation =
    <div>
      <h3>{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime}</h4>
      <hr/>
    </div>;

  function handleSavingSelectedTicket(ticketId){
    const { dispatch } = props;
    const action = {
      type: 'SELECT_TICKET',
      ticketId: ticketId
    };
    dispatch(action);
  }

  return(
    <div onClick={() => {handleSavingSelectedTicket(props.ticketId)}}>
      {ticketInformation}
    </div>
  );


}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string,
  currentRouterPath: PropTypes.string,
  ticketId: PropTypes.string.isRequired
};

export default connect()(Ticket);
