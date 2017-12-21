import React from "react";

class NewTicketForm extends React.Component {

  constructor(props){
    super(props);
    this.handleNewTicketFormSubmission = this.handleNewTicketFormSubmission.bind(this);
  }

  handleNewTicketFormSubmission(event) {
    event.preventDefault()
    console.log(this.refs._names.value);
    //console.log(_names.value);
    const { _names, _location, _issue } = this.refs;
    console.log(_names.value);
    alert(`Data Gathered! ${_names.value}, ${_location.value}, ${_issue.value}`);
  }

  render(){
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
          <button type='submit'>Help!</button>
        </form>
      </div>
    );
  }

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
