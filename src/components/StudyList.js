import React, { Component } from "react";
import "../styles/FlashcardList.css";
import Flashcard from "./Flashcard";
import AddItem from "./AddItem";

class StudyList extends Component {
  render() {
    return this.renderCards();
  }

  constructor(props) {
    super(props);
    this.state = { currentCard: 0 };
    this.renderCards = this.renderCards.bind(this);
    this.updateCard = this.updateCard.bind(this);
  }

  renderCards() {
    const card = this.props.cards[this.state.currentCard];
    console.log(card);
    return (
      <div className="StudyList">
        <Flashcard key={card["key"]} 
          id={card["key"]}
          setId={card["setId"]}
          question={card["question"]} 
          answer={card["answer"]} 
          display={this.props.mode} />
        <button onClick={this.updateCard}>Next</button>
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