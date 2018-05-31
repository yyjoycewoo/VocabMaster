import React, { Component } from "react";
import "../styles/Set.css";

class Set extends Component {
  render() {
    return (
      <div onClick={this.props.onClick} className="Set" data-id={this.props.id}>
        {this.props.name}
        <button onClick={this.removeSet}>Remove Me!</button>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.removeSet = this.removeSet.bind(this);
  }

  removeSet() {
    this.props.removeSet(this.props.id);
  }
}

export default Set;
