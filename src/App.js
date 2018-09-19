import React, { Component } from 'react';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
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
      activeRoom : ''
    }
  }

  setActiveRoom(room){
    this.setState({activeRoom: room});
  }

  render() {
    return (
      <div className="App">
        <RoomList firebase = {firebase} />
        <MessageList firebase = {firebase} setActiveRoom = {this.setActiveRoom.bind(this)}/>

      </div>
    );
  }
}

export default App;
