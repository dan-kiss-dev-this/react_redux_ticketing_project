function liveTime() {
  var greeting = React.createElement('h1', {}, 'Hello, World!');
  var clock = React.createElement('h2', {}, `It is ${new Date().toLocaleTimeString()}`);
  var app = React.createElement('div', {}, greeting, clock);

  ReactDOM.render(
    app, //this is what changed from var greeting
    document.getElementById('react-app-root')
  );
}

setInterval(liveTime, 1000);
