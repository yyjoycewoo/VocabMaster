import React, { Component } from "react";
import "../styles/Set.css";

class Set extends Component {
  render() {
    return (
      <div onClick={this.props.onClick} className="Set set" data-id={this.props.id} style={{background: this.props.color}}>
        <span>{this.props.name}</span>
        <br/>
        <button className="btn btn-outline-danger" onClick={this.removeSet}>Delete</button>
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
