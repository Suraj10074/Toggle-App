import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './Message.css';
class Message extends Component {

  constructor() {
    super()
    this.state={
      display: false
    }

    this.toggleHandler=this.toggleHandler.bind(this);
  }

  toggleHandler=()=> {
    const currentStatus=this.state.display;
    this.setState({
      display: !currentStatus
    })
  }

  render() {
    let content=null;
    if(this.state.display) {
      content=<p>Hello</p>
    }
    return (
      <div className="Message">
        <Button onClick={this.toggleHandler}>Toggle</Button>
        {content}
      </div>
    );
  }
}

export default Message;