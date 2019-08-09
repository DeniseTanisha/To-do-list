import React from "react";
import "./App.css";
// import { firestore } from "../../firebase";
// import firebase from "../../firebase";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Things that I need to do </h1>
      </header>
      <body classsName="list">
        <form>
          <input placeholder="Write a To-Do List" />
          <button type="submit"> Add this to my list </button>
        </form>
      </body>
    </div>
  );
}

export default App;
