import React from "react";
import NewTicketForm from "./NewTicketForm";
import PropTypes from "prop-types";

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.state = {formVisibleOnPage: false};
  }

  showForm(event) {
    this.setState({formVisibleOnPage: true});
  }

  hideForm(event) {
    this.setState({formVisibleOnPage: false});
  }


  render(){
    let coolLookButton = {
      backgroundColor: "#66CDAA",
      borderRadius: "4px",
      padding: "5px",
      color: "white",
      fontSize: "14px",
      marginLeft: "10px",
    };
    let formAreaContent = null;
    if (this.state.formVisibleOnPage){
      formAreaContent = <NewTicketForm
        hideFormAfterSubmission = {this.hideForm}/>
    } else {
      formAreaContent = <button onClick={this.showForm} style={coolLookButton}>Request Help</button>;
    }

    return (
      <div>
        {formAreaContent}
      </div>
    );
  }

}

export default NewTicketControl;
