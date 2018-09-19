import React, {Component} from 'react';

class MessageList extends Component{
  constructor(props){
    super(props);
    this.state = {
      msgs : []
    }
    this.msgsRef = this.props.firebase.database().ref('msgs');
  }

  componentDidMount(){
    this.msgsRef.on('child_added', snapshot => {
      const msg = snapshot.val();
      msg.key = snapshot.key;
      msg.sentAt = this.props.firebase.database.ServerValue.TIMESTAMP;
      this.setState({msgs: this.state.msgs.concat(msg)});
    })
  }

  render(){
    return(
      <div id ='messages-list'>
      {this.state.msgs.map(msg =>
        <div key = {msg.key}>
          <h3>{msg.roomId}</h3>
          <h5>{msg.username}</h5>
          <p>{msg.content}</p>
        </div>)}
      </div>
    );
  }
}

export default MessageList;
