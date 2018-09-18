import React, {Component} from 'react';

class CreateRoom extends Component {
  constructor(props){
    super(props);
    this.state = {newRoomName : ''}
  }

  handleChange(e){
    console.log(e.target.value);
    this.setState({newRoomName : e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createRoom(this.state.newRoomName);
  }

  handleCancelButton(){
    this.props.cancel();
  }

  render(){
    return(
      <form onSubmit = {(e) => this.handleSubmit(e)}>
        <legend>Create new room</legend>
        Enter a room name: <input type = 'text' onChange = {(e) => {this.handleChange(e)}} />
        <button onClick = {() => this.handleCancelButton()}>Cancel</button><button>Submit</button>
      </form>
    );
  }
}

export default CreateRoom;
