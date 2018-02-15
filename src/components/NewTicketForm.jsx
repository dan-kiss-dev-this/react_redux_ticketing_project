import React from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import c from './../constants';

class NewTicketForm extends React.Component {

  constructor(props){
    super(props);
    console.log(props);
    this.handleNewTicketFormSubmission = this.handleNewTicketFormSubmission.bind(this);
  }

  handleNewTicketFormSubmission(event) {
    event.preventDefault();
    // console.log(this.refs._names.value);
    const { _names, _location, _issue } = this.refs;
    const { dispatch } = this.props;
    const action = {
      //object literal with new state will go here
      type: c.ADD_TICKET,
      id: null,
      names: _names.value,
      location: _location.value,
      description: issue.value,
      timeOpened: new Date().getTime()
    }
    dispatch(action);
    this.props.hideFormAfterSubmission();
  }

  render(){
    let coolLookButton = {
      backgroundColor: "#66CDAA",
      borderRadius: "4px",
      padding: "10px",
      color: "white",
      fontSize: "14px",
      marginLeft: "10px",
    };
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
          <textarea
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
  hideFormAfterSubmission: PropTypes.func
};

NewTicketForm = connect()(NewTicketForm);

export default NewTicketForm;
