import React, {Component} from 'react';
import SendMsg from './SendMsg';
import moment from 'moment';

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
      this.setState({msgs: this.state.msgs.concat(msg)});
    })
    this.msgsRef.on('child_removed', snapshot => {
      this.setState({msgs: this.state.msgs.filter((msg) => msg.key!=snapshot.key)});
    });
  }

  submitMsg(newMsg){
    this.msgsRef.push({content: newMsg, roomId: this.props.activeRoom.key, sentAt: moment(Date(this.props.firebase.database.ServerValue.TIMESTAMP)).format("MM/DD/YYYY hh:mm a"), username: this.props.user});
  }

  handleMsgDelete(msg){
    this.msgsRef.child(msg.key).remove();
  }

  componentWillReceiveProps(nextProps){
    this.state.msgs.filter(msg => msg.roomId === nextProps.deleteRoom.key).forEach(msg => this.handleMsgDelete(msg));
  }

  render(){
    return(
      <div id ='messages-list'>
        <h3>{this.props.activeRoom.name}</h3>
        {this.state.msgs.filter(msg => msg.roomId === this.props.activeRoom.key).map(msg =>
        <div key = {msg.key}>
          <h4>{msg.username}</h4>
          <p>{msg.content} <button onClick = {() => this.handleMsgDelete(msg)}>Delete Msg</button></p><span>{msg.sentAt}</span>
        </div>)}
        {this.props.activeRoom === '' ? '' : <SendMsg user = {this.props.user} submitMsg = {this.submitMsg.bind(this)}/> }
      </div>
    );
  }
}

export default MessageList;
