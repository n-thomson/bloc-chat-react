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
  render() {
    return (
      <div className="App">
        <RoomList firebase = {firebase} />
        <MessageList firebase = {firebase} />

      </div>
    );
  }
}

export default App;
