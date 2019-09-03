import React, { Component } from "react";
import PropTypes from "prop-types";
import ToDoItem from "../ToDoItem";

class ToDoList extends Component {
  state = {
    term: "",
    items: []
  };
  onChange = event => {
    this.setState({ term: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    this.setState({
      term: "",
      items: [...this.state.items, this.state.term]
    });
  };

  deleteItem = key => {
    const filteredItems = this.state.items.filter((item, j) => {
      return key !== j;
    });
    this.setState({
      items: filteredItems
    });
  };

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input
            value={this.state.term}
            onChange={this.onChange}
            placeholder="First Thing To Do... "
          />
          <button>ADD TO LIST</button>
        </form>
        <ul>
          {this.state.items.map((item, index) => (
            <ToDoItem
              item={item}
              key={index}
              deleteItem={() => this.deleteItem(index)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
