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
  }

  render() {
    if (this.state.mode === 'browse') {
      const cards = this.state.sets.filter(s => s["key"] === this.state.currentSet )[0]["cards"]
      return (
        <div className="View">
          <FlashcardList cards={cards}/>
          <SetList sets={this.state.sets}/>
        </div>
      )
    } else {
      return (
        <p> nothing here </p>
      )
    }


  }


}

export default View;
