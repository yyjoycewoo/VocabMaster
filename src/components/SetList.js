import React, { Component } from "react";
import "../styles/SetList.css";
import Set from "./Set";
import AddItem from "./AddItem";

class SetList extends Component {
  render() {
    return (
      <div className="SetList">
        <AddItem addSet={this.addSet} type="set" />
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
        removeSet={this.removeSet} 
        onClick={this.props.updateCurrentSet}/>
    ));
  }

  addSet(newSet) {
    const keyCounter = this.props.sets.length + 1;
    newSet["key"] = keyCounter;
    this.props.addSet(newSet);
  }

  removeSet(setId) {
    console.log('in set list')
    this.props.removeSet(setId);
  }
}

export default SetList;
