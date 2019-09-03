import React, { Component } from "react";
import ToDoList from "../TodDoList";
import PropTypes from "prop-types";
import { firestore } from "../firebase";
import firebase from "../firebase";

class ToDoContainer extends Component {
  state = {
    // lists: [],
    // filteredList: []
  };

  componentDidMount() {
    // Use Firebase SDK, firestore object, to fetch collection of top trump cards
    // onSnapshot() watches the collection in the db & listens for changes
    firestore
      .collection("users")
      .get()
      .then(querySnapshot => {
        // cards becomes an array of objects returned from the collection
        const cards = querySnapshot.docs.map(doc => {
          return { ...doc.data(), docId: doc.id }; // Need to get each document id and add to card object
        });

        // setting cards in component state equal to data in collection
        // Initially set filtered list equal to the cards pulled from the database
        this.setState({
          // lists: lists,
          // filteredList: cards
        });
      });
  }
  addListWithSpecifiedUserID = () => {
    firestore
      .collection("User")
      .doc("Denise")
      .set([this.MyToDoList])
      .then(function() {
        console.log(
          "you have successfully added a new user and their first to do!"
        );
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  };

  ////// edit a plant
  editPlant = () => {
    firestore
      .collection("users")
      .doc("Denise")
      .update({
        myPlants: firebase.firestore.FieldValue.arrayRemove({
          location: "living room",
          temperature: "warm",
          light: "dark",
          plantType: "fern",
          name: "mary"
        })
      });
    firestore
      .collection("added-plants")
      .doc("Jess")
      .update({
        myPlants: firebase.firestore.FieldValue.arrayUnion({
          location: "kitchen",
          temperature: "warm",
          light: "dark",
          plantType: "fern",
          name: "catrine"
        })
      })
      .then(function() {
        console.log("you have successfully added a plant!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  };

  addPlant = () => {
    firestore
      .collection("added-plants")
      .doc("Jess")
      .update({
        myPlants: firebase.firestore.FieldValue.arrayUnion({
          location: "living room",
          temperature: "warm",
          light: "dark",
          plantType: "fern",
          name: "harry"
        })
      })
      .then(function() {
        console.log("you have successfully added a plant!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  };

  deletePlant = () => {
    firestore
      .collection("added-plants")
      .doc("Jess")
      .update({
        myPlants: firebase.firestore.FieldValue.arrayRemove({
          location: "living room",
          temperature: "warm",
          light: "dark",
          plantType: "fern",
          name: "jarry"
        })
      })
      .then(function() {
        console.log("you have successfully deleted a plant!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  };

  render() {
    return (
      <div>
        <ToDoList />

        <button onClick={this.componentDidMount}>Load List </button>
        <button onClick={this.addListWithSpecifiedUserID}>
          {" "}
          Add a Plant to Specified New User{" "}
        </button>
        <button onClick={this.addPlant}>
          {" "}
          Add a plant to an existing user
        </button>
        <button onClick={this.editPlant}>
          {" "}
          Edit an existimg plant in an existing user
        </button>
        <button onClick={this.deletePlant}>
          {" "}
          delete a specific plant from a user
        </button>
      </div>
    );
  }
}

export default ToDoContainer;
