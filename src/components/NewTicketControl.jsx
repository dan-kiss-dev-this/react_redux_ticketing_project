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
    console.log(16);
    this.setState({formVisibleOnPage: true})
  }

  hideForm() {
    console.log(21);
    this.setState({formVisibleOnPage: false})
  }


  render(){
    let coolLookButton = {
      backgroundColor: '#008B8B',
      borderRadius: '4px',
      padding: '10px',
      color: '#E0FFFF',
      fontSize: '16px',
    }
    const formVisibleOnPage = this.state.formVisibleOnPage;
    console.log(27);
    let formAreaContent = null;
    //should is be on line 22?
    if (this.state.formVisibleOnPage){
      console.log(31);
      formAreaContent = <NewTicketForm
        onNewTicketCreation={this.props.onNewTicketCreation}
        hideFormAfterSubmission = {this.hideForm}/>
    } else {
      console.log(36);
      formAreaContent = <button style={coolLookButton} onClick={this.showForm}>Request help!</button>
       // formAreaContent = <button onClick={this.handleDisplayingNewTicketForm.bind(this)}>Request Help</button>;
    }

    return (
      console.log(42),
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
