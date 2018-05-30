import React, { Component } from "react";
import "../styles/View.css";
import SetList from "./SetList";
import FlashcardList from "./FlashcardList";
import StudyView from "./StudyView";

class View extends Component {

  constructor(props) {
    super(props);

    const sets = this.props.sets
    const curSet = sets[0]["key"]

    this.state = {
      sets: sets,
      currentSet: curSet,
      mode: 'browse'
    }

    this.updateCurrentSet = this.updateCurrentSet.bind(this);
    this.addCardToSet = this.addCardToSet.bind(this);
  }

  render() {
    if (this.state.mode === 'browse') {
      const cards = this.state.sets.filter(set => {

        return set["key"] == this.state.currentSet;
      })[0]["cards"];
      return (
        <div className="View">
          <FlashcardList cards={cards} addCardToSet={this.addCardToSet} />
          <SetList sets={this.state.sets} updateCurrentSet={this.updateCurrentSet}/>
        </div>
      )
    } else {
      return (
        <p> nothing here </p>
      )
    }


  }

  updateCurrentSet(event) {
    const target = event.target;
    const id = target.dataset.id;
    this.setState({currentSet: id});
  }

  addCardToSet(newCard) {
    var newSets = this.state.sets.map(set => {
      if (set["key"] == this.state.currentSet) {
        set["cards"] = [...set["cards"], newCard]
      }
      return set
    })
    this.setState({sets: newSets});

  }


}

export default View;
