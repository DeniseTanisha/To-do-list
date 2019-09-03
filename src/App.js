import React, { Component } from "react";
import "./App.scss";
import ToDoList from "./TodDoList";
import firebase, { provider } from "./firebase";
import googleIcon from "./static/images/google-icon.png";
import ListContainer from "./ListContainer";

class App extends Component {
  state = {
    user: null,
    error: {}
  };

  signIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        this.setState({
          user
        });
        // history.push("/protected/create");
      })
      .catch(error => {
        // An error happened.
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1> Things that I should do </h1>
        </header>

        <div className="google" onClick={this.signIn}>
          <img src={googleIcon} alt="" />
          <button>Sign In </button>
        </div>

        <section className="main-wrapper">
          <ListContainer />
        </section>
      </div>
    );
  }
}

export default App;
