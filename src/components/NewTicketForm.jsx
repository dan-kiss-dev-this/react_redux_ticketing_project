import React from "react";
import Ticket from "../models/ticket.js";
import PropTypes from "prop-types";
//ticket.js above

class NewTicketForm extends React.Component {

  constructor(props){
    super(props);
    this.handleNewTicketFormSubmission = this.handleNewTicketFormSubmission.bind(this);
  }

  handleNewTicketFormSubmission(event) {
    event.preventDefault()
    console.log(this.refs._names.value);
    const { _names, _location, _issue } = this.refs;
    var newTicket = new Ticket(_names.value, _location.value, _issue.value);
    console.log(newTicket);
    this.props.onNewTicketCreation(newTicket);
    this.props.hideFormAfterSubmission();
    // alert(`Data Gathered! ${_names.value}, ${_location.value}, ${_issue.value}`);
  }

  render(){
    let coolLookButton = {
      backgroundColor: '#66CDAA',
      borderRadius: '4px',
      padding: '10px',
      color: 'white',
      fontSize: '14px',
      marginLeft: '10px',
    }
    return (
      <div>
        <form onSubmit={this.handleNewTicketFormSubmission}>
          <input
            ref='_names'
            type='text'
            id='names'
            placeholder='Pair Names'/>
          <input
            ref='_location'
            type='text'
            id='location'
            placeholder='Location'/>
          <input
            ref='_issue'
            type='text'
            id='issue'
            placeholder='Describe your issue'/>
          <button type='submit' style={coolLookButton}>Help!</button>
        </form>
      </div>
    );
  }

}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func,
  hideFormAfterSubmission: PropTypes.func
}

export default NewTicketForm;

// old functional is below, need to change to make class based component
// function NewTicketForm(props) {
//
//   function handleNewTicketFormSubmission(event) {
//     event.preventDefault()
//   }
//
//   return (
//     <div>
//       <form onSubmit={handleNewTicketFormSubmission}>
//         <input
//           type="text"
//           id="names"
//           placeholder="Pair Names"/>
//         <input type="text" id="location" placeholder="Location"/>
//         <textarea id="issue" placeholder="Describe your issue"/>
//         <button type="submit">Help!</button>
//       </form>
//     </div>
//   );
// }
//
