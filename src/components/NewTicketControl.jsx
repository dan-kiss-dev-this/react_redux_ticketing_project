import React from "react";
import NewTicketForm from "./NewTicketForm";
import PropTypes from "prop-types";
import {Button} from "react-bootstrap";
import {Modal} from "react-bootstrap";

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.showFormModal = this.showFormModal.bind(this);
    this.hideFormModal = this.hideFormModal.bind(this);
    this.state = {formModalIsShowing: false};
    // this.handleDisplayingNewTicketForm = this.handleDisplayingNewTicketForm.bind(this);
  }

  showFormModal() {
    console.log(16);
    this.setState({formModalIsShowing: true});
  }

  hideFormModal() {
    console.log(21);
    this.setState({formModalIsShowing: false});
  }


  render(){
    // let coolLookButton = {
    //   backgroundColor: '#008B8B',
    //   borderRadius: '4px',
    //   padding: '10px',
    //   color: '#E0FFFF',
    //   fontSize: '16px',
    // }
    // const formVisibleOnPage = this.state.formVisibleOnPage;
    // console.log(27);
    // let formAreaContent = null;
    // if (this.state.formVisibleOnPage){
    //   console.log(31);
    //   formAreaContent = <NewTicketForm
    //     onNewTicketCreation={this.props.onNewTicketCreation}
    //     hideFormAfterSubmission = {this.hideForm}/>
    // } else {
    //   console.log(36);
    //   formAreaContent = <Button bsStyle="primary" bsSize="large" onClick={this.showForm}>Request help!</Button>
    // }

    return (
      console.log(42),
      <div>
          <Button
            block="true"
            bsStyle="primary"
          bsSize="large"
            onClick={this.showFormModal}>
            Request Help!
        </Button>
          <Modal
          show={this.state.formModalIsShowing}
          onHide={this.hideFormModal}
          bsSize="large">
          <Modal.Header>
              <Modal.Title>Request Help</Modal.Title>
            </Modal.Header>
          <Modal.Body>
              <NewTicketForm
              onNewTicketCreation={this.props.onNewTicketCreation}
              hideFormAfterSubmission = {this.hideModal}/>
            </Modal.Body>
        </Modal>
          {/* {formAreaContent} */}
        </div>
    );
  }

}

NewTicketControl.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketControl;
