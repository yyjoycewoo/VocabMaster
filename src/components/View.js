import React, { Component } from "react";
import "../styles/View.css";
import SetList from "./SetList";
import BrowseList from "./BrowseList";
import StudyList from "./StudyList";
import TestList from "./TestList";

class View extends Component {

  constructor(props) {
    super(props);

    const sets = this.props.sets;
    const currSet = sets[0]["key"];

    this.state = {
      sets: sets,
      currentSet: currSet,
      mode: 'browse',
    }

    this.updateCurrentSet = this.updateCurrentSet.bind(this);
    this.addCardToSet = this.addCardToSet.bind(this);
    this.addSet = this.addSet.bind(this)
    this.removeCardFromSet = this.removeCardFromSet.bind(this);
    this.removeSet = this.removeSet.bind(this);
    this.updateMode = this.updateMode.bind(this);
  }

  render() {
    // find the cards belonging to the selected set (default = 0)
    const getCurrentSet = this.state.sets
      .filter(set => (set["key"] == this.state.currentSet))[0];
    const cards = (typeof getCurrentSet !== 'undefined') ? getCurrentSet["cards"] : [];

    const browseButton = <button className="btn btn-secondary btn-sm" onClick={this.updateMode} name="browse">Browse Mode</button>;
    const studyButton = <button className="btn btn-secondary btn-sm" onClick={this.updateMode}  name="study">Study Mode</button>;
    const testButton = <button className="btn btn-secondary btn-sm" onClick={this.updateMode} name="test">Test Mode</button>;
    const setList = <SetList sets={this.state.sets}
                      updateCurrentSet={this.updateCurrentSet}
                      removeSet={this.removeSet}
                      addSet={this.addSet}
                      pickColor={this.pickColor}/>
    const testCardList = <TestList cards={cards}
                          currSet={this.state.currentSet}
                          mode={"test"} />
    const studyCardList = <StudyList cards={cards}
                          mode={"study"} />
    const browseCardList = <BrowseList cards={cards}
                            addCardToSet={this.addCardToSet}
                            removeCardFromSet={this.removeCardFromSet}
                            mode={"browse"} />

    return (
    <div className="View">
      <div className="Modes">
        {browseButton}
        {studyButton}
        {testButton}
      </div>

      { (this.state.mode === 'browse') && browseCardList }
      { (this.state.mode === 'study') && studyCardList }
      { (this.state.mode === 'test') && testCardList }

      {setList}
    </div>
    )
  }

  updateMode(event) {
    this.setState({mode: event.target.name});
  }

  removeCardFromSet(setId, cardId) {
    const updatedSets = this.state.sets.map(set => {
      if (set["key"] == setId) {
        const index = set["cards"].findIndex(card => (card.key == cardId))
        set["cards"].splice(index, 1);
      }
      return set;
    })
    this.setState({ sets: updatedSets });
  }

  updateCurrentSet(event) {
    if (event.target !== event.currentTarget) {
      this.setState({currentSet: this.state.currentSet});
    } else {
      const target = event.target;
      const id = target.dataset.id;
      this.setState({currentSet: id});
    }
  }

  addCardToSet(newCard) {
    newCard["setId"] = this.state.currentSet;
    var updatedSets = this.state.sets.map(set => {
      if (set["key"] == this.state.currentSet) {
        newCard["color"] = set["color"]
        set["cards"] = [...set["cards"], newCard];
      }
      return set;
    })
    this.setState({ sets: updatedSets });
  }

  addSet(newSet) {
    const sets = [...this.state.sets, newSet];
    this.setState({ sets: sets })
  }

  removeSet(setId) {
    const index = this.state.sets.findIndex(set => (set["key"] == setId));
    this.state.sets.splice(index, 1);
  }

  pickColor(){
    const colors = ["#a8e6cf", "#dcedc1", "#ffd3b6", "#ffaaa5", "#ff8b94"]
    return colors[Math.floor(Math.random() * colors.length)];
  }
}

export default View;
