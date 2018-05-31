import React, { Component } from "react";
import "../styles/View.css";
import SetList from "./SetList";
import FlashcardList from "./FlashcardList";
import StudyView from "./StudyView";

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
  }

  render() {
    if (this.state.mode === 'browse') {
      // find the cards belonging to the selected set (default = 0)
      const getCurrentSet = this.state.sets
        .filter(set => (set["key"] == this.state.currentSet))[0];
      const cards = (typeof getCurrentSet !== 'undefined') ? getCurrentSet["cards"] : [];

      return (
        <div className="View">
          <FlashcardList cards={cards}
            addCardToSet={this.addCardToSet}
            removeCardFromSet={this.removeCardFromSet}
            mode={"study"} />
          <SetList sets={this.state.sets}
            updateCurrentSet={this.updateCurrentSet}
            removeSet={this.removeSet}
            addSet={this.addSet}/>
        </div>
      )
    } else { // mode == 'study'
      return (
        <p> nothing here </p>
      )
    }
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
