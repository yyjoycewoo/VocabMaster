import React, { Component } from "react";
import "../styles/Set.css";

class Set extends Component {
  render() {
    return (
      <div onClick={this.props.onClick} className="Set" data-id={this.props.id}>
        {this.props.name}
      </div>
    );
  }

  constructor(props) {
    super(props);
  }
}

export default Set;
