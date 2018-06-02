import React, { Component } from "react";
import "../styles/AddSet.css";

class AddSet extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.addSet = this.addSet.bind(this);
  }

  addSet() {
    const newSet = {
      name: this.state.name,
      cards: []
    }
    this.props.addSet(newSet);
    this.setState({ name: "" });
  }

  handleUpdate(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="newCard set">
        <input
          type="text"
          name="name"
          className="input form-control"
          placeholder="Set Name"
          onChange={this.handleUpdate}
          value={this.state.name}
        />
        <br/>
        <button className="btn btn-dark" onClick={this.addSet}>Add</button>
      </div>

    );
  }
}

export default AddSet;
