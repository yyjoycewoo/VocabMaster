import React, { Component } from "react";
import "../styles/SetList.css";
import Set from "./Set";
import AddSet from "./AddSet";

class SetList extends Component {
  render() {
    return (
      <div className="SetList">
        <AddSet addSet={this.addSet} />
        {this.renderSets()}
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.addSet = this.addSet.bind(this);
    this.removeSet = this.removeSet.bind(this);
  }

  renderSets() {
    return this.props.sets.map(set => (
      <Set key={set["key"]}
        id={set["key"]}
        name={set["name"]}
        cards={set["cards"]}
        color={set["color"]}
        removeSet={this.removeSet}
        onClick={this.props.updateCurrentSet} />
    ));
  }

  addSet(newSet) {
    const keyCounter = this.props.sets.length + 1;
    newSet["key"] = keyCounter;
    newSet["color"] = this.props.pickColor();
    this.props.addSet(newSet);
  }

  removeSet(setId) {
    this.props.removeSet(setId);
  }
}

export default SetList;
