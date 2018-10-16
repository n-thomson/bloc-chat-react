import React, {Component} from 'react';

class User extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn : false
    }
  }
  triggerSignIn(){
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup(provider);
  }

  triggerSignOut(){
    this.props.firebase.auth().signOut();
    this.props.setUser('Guest');
  }

  componentDidMount(){
    this.props.firebase.auth().onAuthStateChanged( user => {
    this.props.setUser(user.displayName);
    this.setState({isLoggedIn : true})
    });
  }

  render(){
    return(
      <div>
        <button onClick = {() => this.triggerSignIn()}>Sign In</button>
        {this.state.isLoggedIn ? <span>Welcome {this.props.user}</span> : <span>Welcome {this.props.user}</span>}
        <button onClick = {() => this.triggerSignOut()}>Sign Out</button>
      </div>
    );
  }
}

export default User;
