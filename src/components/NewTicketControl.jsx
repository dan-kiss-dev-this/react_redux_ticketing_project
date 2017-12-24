import React from "react";
import NewTicketForm from "./NewTicketForm";
import PropTypes from 'prop-types';

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.state = {formVisibleOnPage: false};
    // this.handleDisplayingNewTicketForm = this.handleDisplayingNewTicketForm.bind(this);
  }

  showForm() {
    this.setState({formVisibleOnPage: true})
  }

  hideForm() {
    this.setState({formVisibleOnPage: false})
  }

  // old below
  // handleDisplayingNewTicketForm(event){
  //   console.log("New ticket button was clicked!");
  //   this.setState({formVisibleOnPage: true});
  // }

  render(){
    const formVisibleOnPage = this.state.formVisibleOnPage;
    let formAreaContent = null;
    //should is be on line 22?
    if (this.state.formVisibleOnPage){
      formAreaContent = <NewTicketForm
        onNewTicketCreation={this.props.onNewTicketCreation}
        hideFormAfterSubmission = {this.hideForm}/>
    } else {
      formAreaContent = <button onClick={this.showForm}>Request help!</button>
       // formAreaContent = <button onClick={this.handleDisplayingNewTicketForm.bind(this)}>Request Help</button>;
    }

    return (
      <div>
        {formAreaContent}
      </div>
    );
  }

}

NewTicketControl.propTypes = {
  onNewTicketCreation: PropTypes.func
}

export default NewTicketControl;
