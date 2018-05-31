import React, { Component } from "react";
import "../styles/Set.css";

class Set extends Component {
  render() {
    return (
      <div onClick={this.props.onClick} className="Set set" data-id={this.props.id} style={{background: this.props.color}}>
        {this.props.name}
        <button className="delete-button" onClick={this.removeSet}></button>
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
