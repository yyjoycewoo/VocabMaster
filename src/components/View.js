import React, { Component } from "react";
import "../styles/View.css";
import SetList from "./SetList";
import FlashcardList from "./FlashcardList";
import StudyList from "./StudyList";

class View extends Component {

  constructor(props) {
    super(props);

    const sets = this.props.sets;
    const currSet = sets[0]["key"];

    this.state = {
      sets: sets,
      currentSet: currSet,
      // mode: 'browse',
      mode: 'study',
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

    const browseButton = <button onClick={this.updateMode} name="browse">Browse Mode</button>;
    const studyButton = <button onClick={this.updateMode}  name="study">Study Mode</button>;
    const testButton = <button onClick={this.updateMode} name="test">Test Mode</button>;
    
    if (this.state.mode === 'browse') {
      return (
        <div className="View">
          <div className="Modes">
            {browseButton}
            {studyButton}
            {testButton}
          </div>
          <FlashcardList cards={cards} 
            addCardToSet={this.addCardToSet} 
            removeCardFromSet={this.removeCardFromSet} 
            mode={"browse"} />
          <SetList sets={this.state.sets}
            updateCurrentSet={this.updateCurrentSet}
            removeSet={this.removeSet}
            addSet={this.addSet}/>
        </div>
      )
    } else if (this.state.mode === 'study') {
      return (
        <div className="View">
          <div className="Modes">
            {browseButton}
            {studyButton}
            {testButton}
          </div>
          <StudyList cards={cards} 
            mode={"study"} />
          <SetList sets={this.state.sets}
            updateCurrentSet={this.updateCurrentSet} 
            removeSet={this.removeSet}
            addSet={this.addSet}/>
        </div>
      )
    } else if (this.state.mode === 'test') {
      return (
        <div className="View">
          <div className="Modes">
            {browseButton}
            {studyButton}
            {testButton}
          </div>
          <StudyList cards={cards} 
            mode={"test"} />
          <SetList sets={this.state.sets}
            updateCurrentSet={this.updateCurrentSet}
            removeSet={this.removeSet}
            addSet={this.addSet}/>
        </div>
      )
    }
  }

  updateMode(event) {
    console.log(event.target);
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
}

export default View;
