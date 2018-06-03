import React, { Fragment } from "react";

class ToDoForm extends React.Component {
  state = {
    error: ""
  };

  newItemText = React.createRef();

  handleSubmit = event => {
    event.preventDefault();
    const text = this.newItemText.current.value.trim();

    this.clearError();

    if (text.length === 0) {
      this.setError("The item cannot be empty");
      return;
    }

    this.props.addToDo(text);
    event.currentTarget.reset();
  };

  setError = message => {
    this.setState(state => {
      state.error = message;
      return state;
    });
  };

  clearError = () => {
    this.setState(state => {
      state.error = "";
      return state;
    });
  };

  render() {
    return (
      <Fragment>
        {this.state.error.length !== 0 && (
          <div className="alert alert-danger" role="alert">
            {this.state.error}
          </div>
        )}

        <form className="input-group my-3" onSubmit={this.handleSubmit}>
          <input
            className="form-control"
            type="text"
            name="text"
            placeholder="Add an new todo item..."
            ref={this.newItemText}
          />
          <div className="input-group-append">
            <button className="btn btn-outline-info" type="submit">
              <i className="fa fa-plus" aria-hidden="true" />&nbsp;Add Item
            </button>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default ToDoForm;
