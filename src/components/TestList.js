import React, { Component } from "react";
import "../styles/TestList.css";
import Flashcard from "./Flashcard";
import ResultsList from "./ResultsList";

class TestList extends Component {
  render() {
    const currCardIndex = this.state.currentCard;
    const card = this.props.cards[currCardIndex];
    const correctCards = this.state.correctCards;
    const incorrectCards = this.state.incorrectCards;
    const totalCardsTested = correctCards.length + incorrectCards.length;

    console.log(currCardIndex)
    console.log(card);

    return (
      <div className="TestList">
      { this.isFinishedTest() ? (
        <div className="testCards">
          <Flashcard key={card["key"]}
          id={card["key"]}
          setId={card["setId"]}
          question={card["question"]}
          answer={card["answer"]}
          display={this.props.mode} />

          <form className="answer" onSubmit={this.processAnswer}>
            <input
              type="text"
              onChange={this.handleUpdate}
              value={this.state.question}
            />
          </form>
        </div>
        ) : ( // show results
          <ResultsList correctCards={correctCards} incorrectCards={incorrectCards}/>
        )
      }
        <div>Accuracy: {correctCards.length} / {totalCardsTested}</div>
      </div>
    )
  }

  constructor(props) {
    super(props);
    this.state = { currentCard: 0, correctCards: [], incorrectCards: [] };
    this.processAnswer = this.processAnswer.bind(this);
    this.goToNextCard = this.goToNextCard.bind(this);
    this.displayTestResults = this.displayTestResults.bind(this);
    this.isFinishedTest = this.isFinishedTest.bind(this);
  }

  isFinishedTest() {
    return (this.state.currentCard != -1);
  }

  goToNextCard() {
    const numCards = this.props.cards.length;
    const nextCard = (this.state.currentCard + 1);
    if (nextCard >= numCards) {
      this.setState({currentCard: -1});
      return this.displayTestResults();
    }
    this.setState({currentCard: nextCard});
  }

  displayTestResults() {
    console.log(this.state.correctCards);
    console.log(this.state.incorrectCards);
  }

  processAnswer(e) {
    e.preventDefault();
    const answer = document.querySelector(".answer");
    const currCardIndex = this.state.currentCard;
    const card = this.props.cards[currCardIndex];

    if (card.answer === answer.value) {
      this.setState({correctCards: [...this.state.correctCards, card]});
    } else {
      this.setState({incorrectCards: [...this.state.incorrectCards, card]});
    }

    answer.value = "";
    this.goToNextCard();
  }
}
export default TestList;
