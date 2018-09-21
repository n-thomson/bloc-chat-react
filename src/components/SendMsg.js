import React, {Component} from 'react';

class SendMsg extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentMsg : ''
    }
  }

  handleChange(e){
    this.setState({currentMsg: e.target.value});
  }

  handleSubmit(currentMsg){
    this.props.submitMsg(currentMsg);
    this.setState({currentMsg : ''});
  }

  handleEnter(e){
    if (e.keyCode === 13){
      this.handleSubmit(this.state.currentMsg);
    }
  }
  render(){
    return(
      <div>
          <input id = 'send-msg' type = 'text' onChange = {(e) => this.handleChange(e)} value = {this.state.currentMsg} onKeyDown = {(e) => this.handleEnter(e)}/>
          <button type = 'submit' onClick = {() => this.handleSubmit(this.state.currentMsg)}>Send</button>
      </div>
    );
  }
}

export default SendMsg;
