import React from "react";
import Header from "./Header";
import ToDoList from "./ToDoList";
import { getRandomTagLine } from "../helpers";

class App extends React.Component {
  render() {
    return (
      <div className="dashboard container">
        <Header tagline={getRandomTagLine()} />
        <ToDoList storageKey="react-todo" />
      </div>
    );
  }
}

export default App;
