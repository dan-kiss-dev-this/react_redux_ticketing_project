import Moment from "moment";

class Ticket {
  constructor(names, location, issue) {
    //console.log("models-ticket", 3);
    this.names = names;
    this.location = location;
    this.issue = issue;
    this.timeOpened = new Moment();
    this.timeSinceOpened = "a few secondz";
    console.log(this.timeSinceOpened);
  }

  setTimeSinceOpened() {
    return this.timeOpened.fromNow(true);
  }
}

export default Ticket;
