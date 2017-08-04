import React from 'react';
import io from 'socket.io-client';

class App extends React.Component {

  componentWillMount() {
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', this.connect);
  }

  connect() {
    alert("Connected: " + this.id);
    console.log(this.id);
  }

  render() {
    return (<h1>Hello World from Socket App</h1>);
  }
}

// module.exports = App;
export default App;
