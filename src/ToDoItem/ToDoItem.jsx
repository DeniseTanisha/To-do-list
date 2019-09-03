import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ToDoItem.module.scss";

class ToDoItem extends Component {
  state = {
    checked: false,
    filteredItems: []
  };
  handleClick = () => {
    this.setState({
      checked: !this.state.checked
    });
  };

  render() {
    const done = this.state.checked ? styles.itemDone : "";
    return (
      <li>
        <input type="checkbox" onClick={this.handleClick} />
        <span className={`${styles.item}  ${done}`}>{this.props.item}</span>
        <span className={styles.deleteX} onClick={this.props.deleteItem}>
          [DELETE]
        </span>
      </li>
    );
  }
}

export default ToDoItem;
