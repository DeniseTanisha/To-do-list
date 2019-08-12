import React, { Component } from "react";
import ToDoItem from "./ToDoItem"

class TodDoList extends Component {
state = {
  term: "",
  ToDoItem:  

};
  AddItem = event => {
      onChange 
  }

  
  render() {
    return (
      <div>
        <h3>My First List</h3>
        <input type="text" placeholder="First thing to do" />
        <button onClick={this.AddItem}> SAVE</button>
      </div>
    );
  }
}

export default TodDoList;
