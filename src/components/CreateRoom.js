import React, {Component} from 'react';

class CreateRoom extends Component {
  constructor(props){
    super(props);
    this.state = {newRoomName : ''}
  }

  handleChange(e){
    this.setState({newRoomName : e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createRoom(this.state.newRoomName);
  }

  handleCancelButton(){
    this.props.cancel();
  }

  handleEnter(e){
    if(e.which === 13){
      this.handleSubmit(e);
    }
  }

  render(){
    return(
      <form onSubmit = {(e) => this.handleSubmit(e)} >
        <legend>Create new room</legend>
        Enter a room name: <input type = 'text' onChange = {(e) => {this.handleChange(e)}} onKeyPress = {(e) => this.handleEnter(e)}/>
        <button onClick = {() => this.handleCancelButton()}>Cancel</button><button>Submit</button>
      </form>
    );
  }
}

export default CreateRoom;
