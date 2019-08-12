import React, { Component } from "react";
import "./App.css";
import ToDoList from "./TodDoList";
// import { firestore } from "../../firebase";
// import firebase from "../../firebase";

function App() {
  return (
    <div className="App">
      <header>
        {" "}
        <h1> Things that I should do </h1>{" "}
      </header>
      <button> </button>
      <section className="main-wrapper">
        <ToDoList />
      </section>
    </div>
  );
}

export default App;
