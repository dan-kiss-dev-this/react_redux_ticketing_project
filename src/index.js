ReactDOM.render(React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Help Queue'
  ),
  React.createElement(
    'h3',
    null,
    '3 a'
  ),
  React.createElement(
    'h3',
    null,
    'Thato and Haley'
  ),
  React.createElement(
    'p',
    null,
    React.createElement(
      'em',
      null,
      'Firebase wont save record'
    )
  )
), document.getElementById('react-app-root'));

// example #2 below note what is here is simplified via jsx file
// var heading = React.createElement('h1', {}, 'Help Queue');
// var ticketLocation = React.createElement('h3', {}, '3a');
// var ticketNames = React.createElement('h3', {}, 'Thato and Haley');
// var ticketIssue = React.createElement('h3', {}, 'Firebase wont save record');
// var app = React.createElement('div', {}, heading, ticketLocation, ticketNames, ticketIssue);
//
// ReactDOM.render(
//   app,
//   document.getElementById('react-app-root')
// )

//original below
// function liveTime() {
//   var greeting = React.createElement('h1', {}, 'Help Queue');
//   var clock = React.createElement('h2', {}, `It is ${new Date().toLocaleTimeString()}`);
//   var app = React.createElement('div', {}, greeting, clock);
//
//   ReactDOM.render(
//     app, //this is what changed from var greeting
//     document.getElementById('react-app-root')
//   );
// }
//
// setInterval(liveTime, 1000);
