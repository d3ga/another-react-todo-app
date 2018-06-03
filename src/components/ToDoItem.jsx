import React from "react";

class ToDoItem extends React.Component {
  // editItemText = React.createRef();

  render() {
    const todo = this.props.itemData;

    return (
      <tr className="todo-item">
        <td>
          <div className="custom-control custom-checkbox text-left">
            <input
              className="custom-control-input checkbox"
              value={todo.uuid}
              id={`todo-done-${todo.uuid}`}
              type="checkbox"
              checked={todo.done}
              onChange={this.props.toggleToDoDone}
            />
            <label
              htmlFor={`todo-done-${todo.uuid}`}
              className="custom-control-label"
            >
              &nbsp;
            </label>
          </div>
        </td>
        <td className="col-1">
          <input
            type="text"
            className={`custom-control-label border-0 ${
              todo.done ? "done" : ""
            }`}
            defaultValue={todo.text}
            // ref={this.editItemText}
            onChange={e => {
              this.props.editToDoItem(todo.uuid, e.target.value);
            }}
          />
        </td>
        <td className="text-right">
          <span
            className="icon-remove"
            onClick={e => {
              this.props.removeToDo(todo.uuid);
            }}
          >
            <i className="fa fa-times" aria-hidden="true" />
          </span>
        </td>
      </tr>
    );
  }
}

export default ToDoItem;
