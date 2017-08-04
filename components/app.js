import React from 'react';
import io from 'socket.io-client';
import Header from './parts/header';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        status: 'disconnected'
    }
  }

  componentWillMount() {
    this.socket = io('http://localhost:3000');
    this.socket.on('connect', this.connect.bind(this));
  }

  connect() {
    // console.log("Connected: " + this.id);
    this.setState({
      status: 'connected'
    });
  }

  render() {
    return (
      <div>
        <Header title="New Header" status={this.state.status}/>
      </div>
    );
  }
}

module.exports = App;
