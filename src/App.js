import React, { Component } from 'react';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';
import * as firebase from 'firebase';
import './App.css';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBI7F4GbUPveCzHsHaomiH5DPu5OJhjymI",
    authDomain: "bloc-chat-93073.firebaseapp.com",
    databaseURL: "https://bloc-chat-93073.firebaseio.com",
    projectId: "bloc-chat-93073",
    storageBucket: "bloc-chat-93073.appspot.com",
    messagingSenderId: "568706158976"
  };
  firebase.initializeApp(config);


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeRoom : '',
      user : 'Guest',
      deleteRoom : ''
      }
  }

  setActiveRoom(room){
    this.setState({activeRoom: room});
  }

  setUser(user){
    this.setState({user: user});
  }

  setDeleteRoom(room){
    this.setState({deleteRoom: room});
    // this.setActiveRoom('');
  }

  render() {
    return(
      <div className="App">
        <header>
          <nav>
            <User firebase = {firebase} setUser = {this.setUser.bind(this)} user = {this.state.user}/>
          </nav>
        </header>
        <RoomList firebase = {firebase} setActiveRoom = {(room) => this.setActiveRoom(room)} setDeleteRoom = {(room)=> this.setDeleteRoom(room)} />
        <MessageList firebase = {firebase} activeRoom = {this.state.activeRoom} user = {this.state.user} deleteRoom = {this.state.deleteRoom} />
      </div>
    );
  }
}

export default App;
