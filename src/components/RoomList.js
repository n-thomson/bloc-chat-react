import React, {Component} from 'react';
import CreateRoom from './CreateRoom';


class RoomList extends Component{
  constructor(props){
    super(props);
    this.state = {
      rooms: [],
      buttonStatus: false
    }
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount(){
    this.roomsRef.on('child_added', snapshot =>{
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({rooms: this.state.rooms.concat(room)});
    });
  }

  handleButtonClick(){
    this.setState({buttonStatus: true});
    if (this.state.buttonStatus === true){
      this.setState({buttonStatus: false});
      return <CreateRoom />;
    }
  }

  render(){
    return(
      <section className = 'roomlist'>
        <h2>Bloc Chat</h2>
        <button onClick = {() => this.handleButtonClick()}>New Room</button>
        <ul>
          {this.state.rooms.map(room =>
            <li key={room.key}>{room.name}</li>)}
        </ul>
      </section>
    );
  }
}

export default RoomList;
