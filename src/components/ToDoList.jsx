import React from "react";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";

const uuid = require("uuid/v4");

class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    const old = localStorage.getItem(this.props.storageKey);

    if (old) {
      this.state = JSON.parse(old);
    } else {
      this.state = {
        toDoItems: {}
      };
    }
  }

  componentDidUpdate() {
    localStorage.setItem(this.props.storageKey, JSON.stringify(this.state));
  }

  // state = {
  //   toDoItems: {
  //     "1": {
  //       uuid: "1",
  //       text: "First Item",
  //       done: false
  //     },
  //     "2": {
  //       uuid: "2",
  //       text: "Second Item",
  //       done: false
  //     },
  //     "3": {
  //       uuid: "3",
  //       text: "Third Item",
  //       done: false
  //     }
  //   }
  // };

  // addToDo is a property of the class ToDoList
  addToDo = text => {
    this.setState(state => {
      const todo = {
        uuid: uuid(),
        text,
        done: false
      };

      state.toDoItems[todo.uuid] = todo;
      return state;
    });
  };

  toggleToDoDone = event => {
    const checkbox = event.target;

    this.setState(state => {
      state.toDoItems[checkbox.value].done = checkbox.checked;
      return state;
    });
  };

  removeToDo = uuid => {
    this.setState(state => {
      delete state.toDoItems[uuid];
      return state;
    });
  };

  editToDoItem = (uuid, text) => {
    this.setState(state => {
      state.toDoItems[uuid].text = text;
      return state;
    });
  };

  render() {
    return (
      <div className="todo-list">
        <ToDoForm addToDo={this.addToDo} />
        <table className="todo-items table">
          <tbody>
            {Object.keys(this.state.toDoItems).map(uuid => (
              <ToDoItem
                key={`todo-item-${uuid}`}
                itemData={this.state.toDoItems[uuid]}
                toggleToDoDone={this.toggleToDoDone}
                removeToDo={this.removeToDo}
                editToDoItem={this.editToDoItem}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ToDoList;
