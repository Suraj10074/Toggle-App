import React, { Component } from 'react';
import { render } from 'react-dom';
import Message from './Message';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Message name={this.state.name} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
