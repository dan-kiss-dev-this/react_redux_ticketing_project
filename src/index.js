  console.log(1)
function liveTime() {
  var greeting = React.createElement('h1', {}, 'Hello, World!');
  var clock = React.createElement('h2', {}, `It is ${new Date().toLocaleTimeString()}`);
  var app = React.createElement('div', {}, greeting, clock);
  console.log(2)

  ReactDOM.render(
    app, //this is what changed from var greeting
    document.getElementById('react-app-root')
  );
  console.log(2.1)
}
  console.log(3)
setInterval(liveTime, 1000);
  console.log(4)
