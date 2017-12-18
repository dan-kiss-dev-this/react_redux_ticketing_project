import React from "react";

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {formVisibleOnPage: false};
  }

  handleDisplayNewTicketForm(event){
    console.log("new ticket button was clicked!")
  }

  render() {
    return(
      <button onClick={this.handleDisplayNewTicketForm}>Request Help</button>
    );
  }

}

export default NewTicketControl;
