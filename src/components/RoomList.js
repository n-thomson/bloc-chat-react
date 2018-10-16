import React, {Component} from 'react';
import CreateRoom from './CreateRoom';


class RoomList extends Component{
  constructor(props){
    super(props);
    this.state = {
      rooms: [],
      isButtonClick: false
    }
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount(){
    this.roomsRef.on('child_added', snapshot =>{
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({rooms: this.state.rooms.concat(room)});
    });
    this.roomsRef.on('child_removed', snapshot => {
      this.setState({rooms: this.state.rooms.filter((room) => room.key!=snapshot.key)});
    });
  }

  handleButtonClick(){
    this.state.isButtonClick ? this.setState({isButtonClick: false}) : this.setState({isButtonClick: true});
  }

  createRoom(newRoomName){
    this.roomsRef.push({name: newRoomName});
    this.setState({isButtonClick: false});
  }

  handleCancel(){
    this.setState({isButtonClick: false});
  }

  handleRoomDelete(room){
    this.roomsRef.child(room.key).remove();
    this.props.setDeleteRoom(room);
  }

  render(){
    return(
      <section className = 'roomlist'>
        <section>
          <h2>Bloc Chat</h2>
          <button onClick = {() => this.handleButtonClick()}>New Room</button>
          <ul>
            {this.state.rooms.map(room =>
              <li key={room.key} onClick = {() => this.props.setActiveRoom(room)}>{room.name} <button onClick = {() => this.handleRoomDelete(room)}>Delete</button></li>)}
          </ul>
        </section>
        <div id = 'create-room'>{
          this.state.isButtonClick ? <CreateRoom createRoom = {this.createRoom.bind(this)} cancel = {this.handleCancel.bind(this)}/> : ''
        }
        </div>
      </section>
    );
  }
}

export default RoomList;
