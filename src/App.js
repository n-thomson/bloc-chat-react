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
      user : ''
      }
  }

  setActiveRoom(room){
    this.setState({activeRoom: room});
  }

  setUser(user){
    this.setState({user : user.displayName});
  }

  render() {
    return(
      <div className="App">
        <header>
          <nav>
            <User firebase = {firebase} setUser = {this.setUser.bind(this)} user = {this.state.user}/>
          </nav>
        </header>
        <RoomList firebase = {firebase} setActiveRoom = {this.setActiveRoom.bind(this)} />
        <MessageList firebase = {firebase} activeRoom = {this.state.activeRoom}/>
      </div>
    );
  }
}

export default App;
