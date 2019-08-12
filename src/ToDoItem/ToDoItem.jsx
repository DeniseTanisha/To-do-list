import React, { Component } from "react";

class ToDoItem extends Component {
  state = {};
  render() {
    return (
      <li>
        <input type="checkbox" onClick={this.handleClick} />
        <span key={index} className={`${styles.ListItem} ${styles.Done}`} />
        <span
          className={styles.deleteX}
          onClick={() => this.props.deleteItem(index.key)}
        >
          X
        </span>
      </li>
    );
  }
}

export default ToDoItem;
