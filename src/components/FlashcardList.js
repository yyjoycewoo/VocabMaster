import React, { Component } from "react";
import "../styles/FlashcardList.css";
import Flashcard from "./Flashcard";
import AddItem from "./AddItem";

class FlashcardList extends Component {
  render() {
    return (
      <div className="FlashcardList">
        <AddItem addCard={this.addCard} type="flashcard" />
        {this.renderCards()}
      </div>
    );
  }

  constructor(props) {
    super(props);
    const cards = this.props.cards;
    const counter = cards.length;
    this.state = { cards: cards,
                    keyCounter: counter + 1
                  };
    this.addCard = this.addCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }

  renderCards() {
    return this.state.cards.map(card => (
      <Flashcard key={card["key"]} id={card["key"]} question={card["question"]} answer={card["answer"]} removeCard={this.removeCard}/>
    ));
  }

  addCard(newCard) {
    newCard["key"] = this.state.keyCounter;
    this.setState({ cards: [...this.state.cards, newCard], keyCounter: this.state.keyCounter++});
  }

  removeCard(removeKey) {
    const filteredCards = this.state.cards.filter(card => {
      return card["key"] !== removeKey;
    });
    this.setState({ cards: filteredCards });
  }
}

export default FlashcardList;
