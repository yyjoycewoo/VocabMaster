import React, { Component } from "react";
//import "../styles/FlashcardList.css";
import "../styles/StudyList.css";

import Flashcard from "./Flashcard";

class StudyList extends Component {
  render() {
    if (this.props.mode == "study") {
      return this.renderStudyList();
    } else if (this.props.mode == "test") {
      return this.renderTestList();
    }
  }

  constructor(props) {
    super(props);
    this.state = { currentCard: 0 };
    this.renderStudyList = this.renderStudyList.bind(this);
    this.renderTestList = this.renderTestList.bind(this);
    this.updateCard = this.updateCard.bind(this);
  }

  renderStudyList() {
    const currCard = this.state.currentCard;
    const card = this.props.cards[currCard];
    const numCards = this.props.cards.length;
    return (
      <div className="StudyList">
        <Flashcard key={card["key"]}
          id={card["key"]}
          setId={card["setId"]}
          question={card["question"]}
          answer={card["answer"]}
          display={this.props.mode} />
        <button onClick={this.updateCard}>Next</button>
        <div>Progress: {currCard+1} / {numCards}</div>
      </div>
    )
  }

  renderTestList() {
    const currCard = this.state.currentCard;
    const card = this.props.cards[currCard];
    const numCards = this.props.cards.length;
    return (
      <div className="StudyList">
        <Flashcard key={card["key"]}
          id={card["key"]}
          setId={card["setId"]}
          question={card["question"]}
          answer={card["answer"]}
          display={this.props.mode} />
        <button onClick={this.updateCard}>Next</button>
        <div>Accuracy: {currCard+1} / {numCards}</div>
      </div>
    )
  }

  updateCard() {
    const numCards = this.props.cards.length;
    const nextCard = (this.state.currentCard + 1) % numCards;
    this.setState({currentCard: nextCard});
  }
}
export default StudyList;
