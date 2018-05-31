import React, { Component } from "react";
import "../styles/FlashcardList.css";
import Flashcard from "./Flashcard";
import AddItem from "./AddItem";

class FlashcardList extends Component {
  render() {
    return (
      <div className="FlashcardList">
        {this.renderCards()}
        <AddItem addCard={this.addCard} type="flashcard" />
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.addCard = this.addCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }

  renderCards() {
    return this.props.cards.map(card => (
      <Flashcard key={card["key"]}
        id={card["key"]}
        question={card["question"]}
        setId={card["setId"]}
        answer={card["answer"]}
        removeCard={this.removeCard}
        display={this.props.mode}/>
    ));
  }

  addCard(newCard) {
    const keyCounter = this.props.cards.length + 1;
    newCard["key"] = keyCounter;
    this.props.addCardToSet(newCard);
  }

  removeCard(setId, cardId) {
    this.props.removeCardFromSet(setId, cardId);
  }

}

export default FlashcardList;
