import Moment from "moment";

class Ticket {
  constructor(names, location, issue) {
    console.log("models-ticket", 3);
    this.names = names;
    this.location = location;
    this.issue = issue;
    this.timeOpened = new Moment();
    // this.timeSinceOpened = this.setTimeSinceOpened();
    this.timeSinceOpened = this.timeSinceOpened();
    console.log(this.timeSinceOpened);
  }

  timeSinceOpened() {
    let time = this.timeOpened.fromNow(true)
    console.log(time);
    return this.timeOpened.fromNow(true);
  }
}

export default Ticket;
